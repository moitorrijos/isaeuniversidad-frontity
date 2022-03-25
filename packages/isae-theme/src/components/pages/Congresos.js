import React from 'react'
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainMessage from '../main-message';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import ContactForm from '../base/contact-form-congresos';
import HomeNews from '../home/home-news';

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

const ZigZagPage = ({ state, page }) => {
  const plan = state.source.page[page];
  const { acf, title, featured_image_src } = plan;
  const imageUrl = featured_image_src;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
  return (
    <>
    
    <MainMessage
        background={background}
        bgColor={colors.white}
        imageUrl={imageUrl}
        title={title.rendered}
        description={acf.descripcion}
      />

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
      <ContactForm />
      <HomeNews />
    </>
  )
}

export default connect(ZigZagPage);