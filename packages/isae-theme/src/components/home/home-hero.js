import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import RightArrowCircle from '../icons/right-arrow-circle';
import useCarousel from '../../hooks/use-carousel';
import MainContainer from '../main-container';
import Image from "@frontity/components/image";

const HeroContainer = styled.div`
  background-color: ${colors.primaryBlue300};
  position: relative;
  background-image: url(${(props) => props.url}/wp-content/uploads/2021/01/background-isae-home-hero-full.svg);
  background-repeat: no-repeat;
  text-align: left;
  background-position: -160px top;
  background-size: 300px;
`;

const Carousel = styled.div`
  height: 760px;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 800px;
  }

  @media (max-width: 415px) {
    height: 840px;
  }

  @media (max-width: 375px) {
    height: 880px;
  }
`;

const CarouselButtons = styled.div`
  position: absolute;
  bottom: 80px;
  width: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  @media (max-width: 600px) {
    bottom: 40px;
  }

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
  background-image: url(${(props) => props.url}/wp-content/uploads/2021/01/background-isae-home-hero.svg);
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 834px) {
    grid-template-columns: 280px 1fr;
    gap: 40px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
  }
`;

const MainButton = styled.a`
  background-color: ${colors.primaryYellow};
  color: ${colors.primaryBlue};
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  transition: all 0.25s ease-in-out;

  svg {
    margin-right: 12px;
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const HeroInfo = styled.div`
  p,
  h1 {
    color: ${colors.white};
  }
  h1 {
    font-size: 3rem;
    line-height: 1.1;

    @media (max-width: 600px) {
      margin-top: 0;
    }
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    order: 2;
  }
`;

const HeroImage = styled.div`
  img, video {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 24px;

    @media (max-width: 600px) {
      height: 300px;
    }
  }

  @media (max-width: 600px) {
    order: 1;
  }
`;

const HomeHero = ({ state }) => {
  const { acf } = state.source.page[90585];
  const backgrouldUrl = state.source.url;
  const [currentItem, setCurrentItem] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem, true, 4);

  return (
    <HeroContainer url={backgrouldUrl}>
      <MainContainer>
        <Carousel>
          <HeroInner style={carouselItems.item1}>
            <HeroInfo>
              <h1>{acf.carrusel_1.titulo}</h1>
              <p>{acf.carrusel_1.descripcion}</p>
              <MainButton href={acf.carrusel_1.url_de_boton}>
                <RightArrowCircle color={colors.primaryBlue} />
                {acf.carrusel_1.titulo_boton}
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={acf.carrusel_1.imagen.alt}
                src={acf.carrusel_1.imagen.sizes["1536x1536"]}
                height={620}
                width={812}
              />
            </HeroImage>
          </HeroInner>
          <HeroInner style={carouselItems.item2}>
            <HeroInfo>
              <h2 style={{ color: `white` }}>{acf.carrusel_2.titulo}</h2>
              <p>{acf.carrusel_2.descripcion}</p>
              <MainButton href={acf.carrusel_2.url_de_boton}>
                <RightArrowCircle color={colors.primaryBlue} />
                {acf.carrusel_2.titulo_boton}
              </MainButton>
            </HeroInfo>
            <HeroImage>
              {acf.carrusel_2.imagen ?
                <Image
                alt={acf.carrusel_2.imagen.alt}
                src={acf.carrusel_2.imagen.sizes["1536x1536"]}
                height="620"
                /> :
                <video width="670" height="620" autoPlay muted loop>
                  <source src={acf.carrusel_2.video.url} type="video/mp4" />
                </video>}
            </HeroImage>
          </HeroInner>
          <HeroInner style={carouselItems.item3}>
            <HeroInfo>
              <h2 style={{ color: `white` }}>{acf.carrusel_3.titulo}</h2>
              <p>{acf.carrusel_3.descripcion}</p>
              <MainButton href={acf.carrusel_3.url_de_boton}>
                <RightArrowCircle color={colors.primaryBlue} />
                {acf.carrusel_3.titulo_boton}
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={acf.carrusel_3.imagen.alt}
                src={acf.carrusel_3.imagen.sizes["1536x1536"]}
                height="620"
              />
            </HeroImage>
          </HeroInner>
          <HeroInner style={carouselItems.item4}>
            <HeroInfo>
              <h2 style={{ color: `white` }}>{acf.carrusel_4.titulo}</h2>
              <p>{acf.carrusel_4.descripcion}</p>
              <MainButton href={acf.carrusel_4.url_de_boton}>
                <RightArrowCircle color={colors.primaryBlue} />
                {acf.carrusel_4.titulo_boton}
              </MainButton>
            </HeroInfo>
            <HeroImage>
              <Image
                alt={acf.carrusel_4.imagen.alt}
                src={acf.carrusel_4.imagen.sizes["1536x1536"]}
                height="620"
              />
            </HeroImage>
          </HeroInner>
        </Carousel>
        <CarouselButtons>
          <span
            onClick={() => {
              setCurrentItem(1);
            }}
            style={
              currentItem === 1
                ? { backgroundColor: colors.lightGray }
                : { backgroundColor: colors.mediumGray }
            }
          ></span>
          <span
            onClick={() => {
              setCurrentItem(2);
            }}
            style={
              currentItem === 2
                ? { backgroundColor: colors.lightGray }
                : { backgroundColor: colors.mediumGray }
            }
          ></span>
          <span
            onClick={() => {
              setCurrentItem(3);
            }}
            style={
              currentItem === 3
                ? { backgroundColor: colors.lightGray }
                : { backgroundColor: colors.mediumGray }
            }
          ></span>
          <span
            onClick={() => {
              setCurrentItem(4);
            }}
            style={
              currentItem === 4
                ? { backgroundColor: colors.lightGray }
                : { backgroundColor: colors.mediumGray }
            }
          ></span>
        </CarouselButtons>
      </MainContainer>
    </HeroContainer>
  );
};

export default connect(HomeHero);
