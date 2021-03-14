import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import PostHero from '../post-hero';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import PrimaryButton from '../primary-button';
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
  color: ${props => props.color};
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
      list-style-image: url("${props=>props.stateSource}");

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
`;

const MemorySection = styled.div`
  padding: 10rem 0;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

const MemoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  h3 {
    color: ${colors.primaryBlue};
  }

  img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }

  a {
    color: ${colors.primaryBlue};
    text-align: center;
  }
`;

const PlanningPage = ({ state }) => {
  const plan = state.source.page[91148];
  const { acf, title, featured_image_src } = plan;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
  const background2 = state.source.url+'/wp-content/uploads/2021/03/background-isae-12.svg';
  const imageUrl = featured_image_src;
  const listStyle = state.source.url+'/wp-content/uploads/2021/03/check.svg';
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
                src={acf.planificacion.imagen.url ? acf.planificacion.imagen.url : ''}
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
                src={acf.objetivos.imagen.url ? acf.objetivos.imagen.url : state.source.url+'/wp-content/uploads/2021/03/Rectangle10.jpg'}
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
        <CenteredHeading color={colors.white}>{acf.funciones.titulo}</CenteredHeading>
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
              <PrimaryButton link={acf.plan_etrategico.descarga ? acf.plan_etrategico.descarga : '#0'}>
                Descargar Políticas
              </PrimaryButton>
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.plan_etrategico.imagen.url ? acf.plan_etrategico.imagen.url : ''}
                alt={acf.plan_etrategico.imagen.alt ? acf.plan_etrategico.imagen.alt : ''}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
      </PlanningSection>
      <MemorySection background={background2}>
        <CenteredHeading color={colors.primaryBlue}>Memorias Institucionales</CenteredHeading>
        <MainContainer>
          <Grid columns="4" gap="30px">
            <MemoryCard>
              <Image src={acf.memorias1.icono.url ? acf.memorias1.icono.url : state.source.url+'/wp-content/uploads/2021/03/memorias1.svg'} />
              <h3>{acf.memorias1.ano}</h3>
              <Link link={acf.memorias1.url}>Descargar Memoria Institucional</Link>
            </MemoryCard>
            <MemoryCard>
              <Image src={acf.memorias2.icono.url ? acf.memorias2.icono.url : state.source.url+'/wp-content/uploads/2021/03/memorias2.svg'} />
              <h3>{acf.memorias2.ano}</h3>
              <Link link={acf.memorias2.url}>Descargar Memoria Institucional</Link>
            </MemoryCard>
            <MemoryCard>
              <Image src={acf.memorias3.icono.url ? acf.memorias3.icono.url : state.source.url+'/wp-content/uploads/2021/03/memorias3.svg'} />
              <h3>{acf.memorias3.ano}</h3>
              <Link link={acf.memorias3.url}>Descargar Memoria Institucional</Link>
            </MemoryCard>
            <MemoryCard>
              <Image src={acf.memorias4.icono.url ? acf.memorias4.icono.url : state.source.url+'/wp-content/uploads/2021/03/memorias4.svg'} />
              <h3>{acf.memorias4.ano}</h3>
              <Link link={acf.memorias4.url}>Descargar Memoria Institucional</Link>
            </MemoryCard>
          </Grid>
        </MainContainer>
      </MemorySection>
    </>
  );
}

export default connect(PlanningPage);