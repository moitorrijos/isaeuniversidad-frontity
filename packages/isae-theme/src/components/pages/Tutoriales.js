import React from 'react'
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainMessage from '../main-messagevid';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import ContactForm from '../base/contact-form';
import HomeNews from '../home/home-news';
import SecondaryMessage from '../SecondaryMessageVid';
import SecondaryMessageVid from '../SecondaryMessageVid';

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
function iterador(params) {
  let suma = 0;
  for (let i in params) {      
    suma++;
  }
  return suma;
  
}

const Tutoriales = ({ state, page }) => {
  const plan = state.source.page[page];
  const { acf, title, featured_image_src } = plan;
  const imageUrl = featured_image_src;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
     
 


  return (
    <>
    <MainMessage id="estudiantes"
        background={background}
        bgColor={colors.white}
        imageUrl={acf.seccion_Main.imagen.sizes.large}
        title={acf.seccion_Main.titulo}
        description={acf.seccion_Main.descripcion}
      />
      {/* <h3>Estudiantes</h3>
        <SecondaryMessageVid     
        bgColor={colors.white}
        title={acf.seccion_2.grupo_1.text}
        YouTubeId={acf.seccion_2.grupo_1.youtube_id}      
        title2={acf.seccion_2.grupo_2.text}
        YouTubeId2={acf.seccion_2.grupo_2.youtube_id}      
        title3={acf.seccion_2.grupo_3.text}
        YouTubeId3={acf.seccion_2.grupo_3.youtube_id}      
        title4={acf.seccion_2.grupo_4.text}
        YouTubeId4={acf.seccion_2.grupo_4.youtube_id}      
        /> */}
    </>
  )
}

export default connect(Tutoriales);