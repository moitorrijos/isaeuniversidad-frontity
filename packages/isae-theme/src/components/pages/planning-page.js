import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import PostHero from '../post-hero';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import Link from "@frontity/components/link";

const PlanningSection = styled.div`
  padding: 2rem;
  background-color: ${props=>props.bgColor};
`;

const PlanDescription = styled.div`
  align-self: center;
  max-width: 480px;
  h2 {
    font-size: 42px;
    color: ${colors.primaryBlue};
  }
`;

const PlanImage = styled.figure`
  margin: 0;
  padding: 6rem 0;
  img {
    width: 474px;
    height: 528px;
    border-radius: 20px;
    box-shadow: ${effects.boxShadow};
  }
`;

const FunctionsSection = styled.div`
  padding: 8rem 0 12rem;
  background-image: linear-gradient(89.88deg, #FFD539 0.13%, #F1BF07 99.93%);
`;

const CenteredHeading = styled.h2`
  padding: 0 4rem;
  text-align: center;
  color: ${colors.white};
`;

const Functions = styled.div`
  padding: 4rem 6rem;
  border-radius: 20px;
  background-color: ${colors.white};

  ul {
    columns: 2;
    column-gap: 120px;
    padding: 0;
    padding-left: 30px;
    overflow: visible;
    position: relative;

    li {
      margin: 2rem 0;
      /* list-style-image: url("${props=>props.stateSource}"); */

      &:before {
        content: '';
        display: inline-block;
        height: 18px;
        width: 18px;
        top: 4px;
        background-image: url("${props=>props.stateSource}");
        position: absolute;
        left: -20px;
        z-index: 4;
      }

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
`;

const PlanningPage = ({ state }) => {
  const plan = state.source.page[91148];
  const { acf, title, featured_image_src } = plan;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
  const imageUrl = featured_image_src;
  const images = state.source.attachment;
  const listStyle = state.source.url+'/wp-content/uploads/2021/03/check.svg';
  console.log(plan);
  return(
    <>
      <PostHero
        background={background}
        bgColor={colors.white}
        imageUrl={imageUrl}
        title={title.rendered}
        description={acf.descripcion}
      />
      <PlanningSection bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="100px">
            <PlanDescription>
              <h2>{acf.planificacion.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.planificacion.descripcion)} />
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.planificacion.imagen.url ? acf.planificacion.imagen.url : images[acf.planificacion.imagen].source_url}
                alt={acf.planificacion.imagen.alt ? acf.planificacion.imagen.alt : ''}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
      </PlanningSection>
      <PlanningSection bgColor={colors.white}>
        <MainContainer>
          <Grid columns="2" gap="100px">
            <PlanImage>
              <Image
                src={acf.objetivos.imagen.url ? acf.objetivos.imagen.url : images[acf.objetivos.imagen].source_url}
                alt={acf.objetivos.imagen.alt ? acf.objetivos.imagen.alt : ''}
              />
            </PlanImage>
            <PlanDescription>
              <h2>{acf.objetivos.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.objetivos.descripcion)} />
            </PlanDescription>
          </Grid>
        </MainContainer>
      </PlanningSection>
      <FunctionsSection>
        <CenteredHeading>{acf.funciones.titulo}</CenteredHeading>
        <MainContainer>
          <Functions
            stateSource={listStyle}
            dangerouslySetInnerHTML={createMarkup(acf.funciones.descripcion)}
          />
        </MainContainer>
      </FunctionsSection>
      <PlanningSection bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="100px">
            <PlanDescription>
              <h2>{acf.plan_etrategico.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.plan_etrategico.descripcion)} />
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.plan_etrategico.imagen.url ? acf.plan_etrategico.imagen.url : images[acf.plan_etrategico.imagen].source_url}
                alt={acf.plan_etrategico.imagen.alt ? acf.plan_etrategico.imagen.alt : ''}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
      </PlanningSection>
    </>
  );
}

export default connect(PlanningPage);