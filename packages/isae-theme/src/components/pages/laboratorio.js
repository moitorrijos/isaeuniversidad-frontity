import React from 'react'
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainMessage from '../main-message';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import ContactForm from '../base/contact-form';
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

const FunctionsSection = styled.div`
  padding: 6rem 0 8rem;
  background-image: linear-gradient(20deg, ${colors.lightGray}, ${colors.mediumGray});

  @media (max-width: 834px) {
    padding: 4rem 0 8rem;
  }
`;

const CenteredHeading = styled.h2`
  padding: 0 4rem;
  text-align: center;
  color: ${props => props.color};
`;

const Functions = styled.div`
  padding: 4rem;
  border-radius: 20px;
  background-color: ${colors.white};
  box-shadow: ${effects.boxShadow};

  @media (max-width: 834px) {
    padding: 2rem;
    padding-left: 1rem;
  }

  ul {
    padding: 0;
    padding-left: 33px;
    overflow: visible;
    position: relative;
    columns: 2;
    column-gap: 120px;

    @media (max-width: 834px) {
      columns: 1;
    }

    li {
      margin: 2rem 0;
      padding-left: 1rem;
      line-height: 1.3;

      &:first-of-type {
        margin-top: 0;
      }
    }
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
      </PlanningSection>
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
      <PlanningSection bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="200px" med_gap="40px" small_gap="20px">
            <PlanDescription>
              <h2>{acf.grupo_1.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.grupo_1.descripcion)} />
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.planificacion.imagen.url ? acf.grupo_1.imagen.url : ''}
                alt={acf.planificacion.imagen.alt ? acf.grupo_1.imagen.alt : ''}
                height={528}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
      </PlanningSection>
      <FunctionsSection>
        <CenteredHeading color={colors.primaryBlue}>{acf.funciones.titulo}</CenteredHeading>
        <MainContainer>
          <Functions
            dangerouslySetInnerHTML={createMarkup(acf.funciones.descripcion)}
          />
        </MainContainer>
      </FunctionsSection>            
    </>
  )
}

export default connect(ZigZagPage);