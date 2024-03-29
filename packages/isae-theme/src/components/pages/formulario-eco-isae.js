import React from "react";
import { styled, connect } from "frontity";
import SlimHero from '../slim-hero';
import ContactForm from '../base/contact-form-ecoIsae';
import HomeNews from '../home/home-news-eco';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import createMarkup from '../../helpers/create-markup';
import Grid from '../grid';
import Image from "@frontity/components/image";
import { effects } from '../../styles/effects';

const PageContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.85;
`;

const PlanningSection = styled.div`
  padding: 8rem 0;
  background-color: ${props=>props.bgColor};

  @media (max-width: 834px) {
    padding: 4rem 0;
  }
`;
const PlanDescription = styled.div`
  align-self: center;
  max-width: 480px;
  h2 {
    font-size: 42px;
    color: ${colors.primaryBlue};
  }
  @media (max-width: 600px) {
    order: 2;
  }
`;

const PlanImage = styled.figure`
  margin: 0;
  align-self: center;
  img {
    width: 100%;
    height: 528px;
    border-radius: 20px;
    box-shadow: ${effects.boxShadow};
    object-fit: cover;
    object-position: center top;

    @media (max-width: 834px) {
      height: 420px;
    }

    @media (max-width: 600px) {
      height: 380px;
    }
  }

  @media (max-width: 600px) {
    order: 1;
  }
`;


const GeneralPage = ({ state, page }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const { featured_image_src, title, excerpt, content, acf } = pageData;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  return(
    <>
      <SlimHero
        title = {title.rendered}
        background={background}
        featured_image={featured_image_src}
        description={excerpt.rendered}
      />
     <PlanningSection bgColor={colors.lightGray}>
     <MainContainer>
     <Grid columns="2" gap="200px" med_gap="40px" small_gap="20px">
            <PlanDescription>
              <h2>{acf.planificacion.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.planificacion.descripcion)} />
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.planificacion.imagen.url ? acf.planificacion.imagen.url : ''}
                alt={acf.planificacion.imagen.alt ? acf.planificacion.imagen.alt : ''}
                height={528}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
        {acf.objetivos.titulo && <PlanningSection bgColor={colors.white}>
        <MainContainer>
          <Grid columns="2" gap="200px" med_gap="40px" small_gap="20px">
            <PlanImage>
              <Image
                src={acf.objetivos.imagen.url ? acf.objetivos.imagen.url : state.source.url+'/wp-content/uploads/2021/03/Rectangle10.jpg'}
                alt={acf.objetivos.imagen.alt ? acf.objetivos.imagen.alt : ''}
                height={528}
              />
            </PlanImage>
            <PlanDescription>
              <h2>{acf.objetivos.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.objetivos.descripcion)} />
            </PlanDescription>
          </Grid>
        </MainContainer>
      </PlanningSection>}
      </PlanningSection>
      <ContactForm />      
      <HomeNews />
    </>
  )
}

export default connect(GeneralPage);