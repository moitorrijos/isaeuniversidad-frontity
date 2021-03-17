import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import useCarousel from '../../hooks/use-carousel';
import MainContainer from '../main-container';
import MainButton from '../main-button';
import Image from "@frontity/components/image";

const HeroContainer = styled.div`
  background-color: ${colors.primaryBlueBright};
  position: relative;
  background-image: url(${props => props.url}/wp-content/uploads/2021/01/background-isae-home-hero-full.svg);
  background-repeat: no-repeat;
  background-position: -160px top;
  background-size: 300px;
`;


const Carousel = styled.div`
  height: 780px;
  position: relative;
  overflow: hidden;
`;

const CarouselButtons = styled.div`
  position: absolute;
  top: 650px;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;

  span {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${colors.mediumGray};
    cursor: pointer;
  }
`;

const HeroInner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 5rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 368px 1fr;
  gap: 100px;
  align-items: center;
  background-image: url(${props => props.url}/wp-content/uploads/2021/01/background-isae-home-hero.svg);
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.5s ease-in-out;
`;

const HeroInfo = styled.div`
  p, h1 {
    color: ${colors.white};
  }
  h1 {
    font-size: 3rem;
    line-height: 1.1;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.div`
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 24px;
  }
`;


const HomeHero = ({ state }) => {
  const { acf, title } = state.source.sede[36];
  const backgrouldUrl = state.source.url;
  const [ currentItem, setCurrentItem ] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem);
  return (
    <HeroContainer url={backgrouldUrl}>
      <MainContainer>
        <Carousel>
          <HeroInner style={carouselItems.item1}>
            <HeroInfo>
              <h1>Carrusel 1</h1>
              <p>
                Estudia una carrera con nosotros,
                matricúlate en cualquiera de nuestras 8 sedes a nivel nacional
                <em>#estudiaenISAE</em>
              </p>
              <MainButton
                background={colors.primaryYellow}
                color={colors.primaryBlue}
                link="#formulario-contacto"
              >
                Más Información
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={title.rendered}
                src={acf.foto.sizes["1536x1536"]}
                height="620"
              />
            </HeroImage>
          </HeroInner>
          <HeroInner style={carouselItems.item2}>
            <HeroInfo>
              <h1>Carrusel 2</h1>
              <p>
                La U de las oportunidades.{' '}
                Matricúlate hoy mismo.{' '}
                Estudia en cualquiera de nuestras 8 sedes.{' '}
                <em>#estudiaenISAE</em>
              </p>
              <MainButton
                background={colors.primaryYellow}
                color={colors.primaryBlue}
                link="#formulario-contacto"
              >
                Más Información
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={title.rendered}
                src={acf.foto.sizes["1536x1536"]}
                height="620"
              />
            </HeroImage>
          </HeroInner>
          <HeroInner style={carouselItems.item3}>
            <HeroInfo>
              <h1>Carrusel 3</h1>
              <p>
                La U de las oportunidades.{' '}
                Matricúlate hoy mismo.{' '}
                Estudia en cualquiera de nuestras 8 sedes.{' '}
                <em>#estudiaenISAE</em>
              </p>
              <MainButton
                background={colors.primaryYellow}
                color={colors.primaryBlue}
                link="#formulario-contacto"
              >
                Más Información
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={title.rendered}
                src={acf.foto.sizes["1536x1536"]}
                height="620"
              />
            </HeroImage>
          </HeroInner>
        </Carousel>
        <CarouselButtons>
          <span
            onClick={() => { setCurrentItem(1) }}
            style={currentItem === 1 ? { backgroundColor: colors.lightGray } : { backgroundColor: colors.mediumGray }}
          ></span>
          <span 
            onClick={() => { setCurrentItem(2) }}
            style={currentItem === 2 ? { backgroundColor: colors.lightGray } : { backgroundColor: colors.mediumGray }}
          ></span>
          <span 
            onClick={() => { setCurrentItem(3) }}
            style={currentItem === 3 ? { backgroundColor: colors.lightGray } : { backgroundColor: colors.mediumGray }}
          ></span>
        </CarouselButtons>
      </MainContainer>
    </HeroContainer>
  );
}

export default connect(HomeHero);