import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainMessage from '../main-message';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import PrimaryButton from '../primary-button';
import createMarkup from '../../helpers/create-markup';
import MemoryCard from '../memory-card';

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

const MemorySection = styled.div`
  padding: 10rem 0;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

const PlanningPage = ({ state, page }) => {
  const plan = state.source.page[page];
  const { acf, title, featured_image_src } = plan;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
  const background2 = state.source.url+'/wp-content/uploads/2021/03/background-isae-12.svg';
  const imageUrl = featured_image_src;
  return(
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
              <PrimaryButton link={acf.plan_etrategico.descarga ? acf.plan_etrategico.descarga : '#0'} style={{ marginRight: '20px' }}>
                Descargar Políticas
              </PrimaryButton>
              <PrimaryButton link={acf.plan_etrategico.url_plan_estrategico ? acf.plan_etrategico.url_plan_estrategico : '#0'}>
                Plan Estratégico
              </PrimaryButton>
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
              <h2 >{acf.objetivos.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.objetivos.descripcion)} />
            </PlanDescription>
          </Grid>
        </MainContainer>
      </PlanningSection>}
      <FunctionsSection>
        <CenteredHeading color={colors.primaryBlue}>{acf.funciones.titulo}</CenteredHeading>
        <MainContainer>
          <Functions
            dangerouslySetInnerHTML={createMarkup(acf.funciones.descripcion)}
          />
        </MainContainer>
      </FunctionsSection>
      {acf.plan_etrategico.imagen && <PlanningSection bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="200px" med_gap="40px" small_gap="20px" >
            <PlanDescription>
              <h2>{acf.plan_etrategico.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.plan_etrategico.descripcion)} />
              <PrimaryButton link={acf.plan_etrategico.descarga ? acf.plan_etrategico.descarga : '#0'} style={{ marginRight: '20px' }}>
                Descargar Políticas
              </PrimaryButton>
              <PrimaryButton link={acf.plan_etrategico.url_plan_estrategico ? acf.plan_etrategico.url_plan_estrategico : '#0'}>
                Plan Estratégico
              </PrimaryButton>
            </PlanDescription>
            <PlanImage>
              <Image
                src={acf.plan_etrategico.imagen.url ? acf.plan_etrategico.imagen.url : ''}
                alt={acf.plan_etrategico.imagen.alt ? acf.plan_etrategico.imagen.alt : ''}
                height={528}
              />
            </PlanImage>
          </Grid>
        </MainContainer>
      </PlanningSection>}
      <MemorySection background={background2}>
        <CenteredHeading color={colors.primaryBlue}>{acf.nombre}</CenteredHeading>
        <MainContainer>
          <Grid columns="6" med_columns="2" small_columns="2" gap="15px" small_gap="10px">
            {acf.memorias1.icono && <MemoryCard memory={acf.memorias1} nombre={acf.nombre} />}
            {acf.memorias2.icono && <MemoryCard memory={acf.memorias2} nombre={acf.nombre} />}
            {acf.memorias3.icono && <MemoryCard memory={acf.memorias3} nombre={acf.nombre} />}
            {acf.memorias4.icono && <MemoryCard memory={acf.memorias4} nombre={acf.nombre} />}
            {acf.memorias5.icono && <MemoryCard memory={acf.memorias5} nombre={acf.nombre} />}
            {acf.memorias6.icono && <MemoryCard memory={acf.memorias6} nombre={acf.nombre} />}
            {acf.memorias7.icono && <MemoryCard memory={acf.memorias7} nombre={acf.nombre} />}
            {acf.memorias8.icono && <MemoryCard memory={acf.memorias8} nombre={acf.nombre} />}
            {acf.memorias9.icono && <MemoryCard memory={acf.memorias9} nombre={acf.nombre} />}
            {acf.memorias10.icono && <MemoryCard memory={acf.memorias10} nombre={acf.nombre} />}
            {acf.memorias11.icono && <MemoryCard memory={acf.memorias11} nombre={acf.nombre} />}
            {acf.memorias12.icono && <MemoryCard memory={acf.memorias12} nombre={acf.nombre} />}
          </Grid>
        </MainContainer>
      </MemorySection>
    </>
  );
}

export default connect(PlanningPage);