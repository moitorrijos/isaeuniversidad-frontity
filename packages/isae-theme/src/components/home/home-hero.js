import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
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
`;

const HeroInner = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: grid;
  grid-template-columns: 368px 1fr;
  gap: 100px;
  align-items: center;
  background-image: url(${props => props.url}/wp-content/uploads/2021/01/background-isae-home-hero.svg);
  background-repeat: no-repeat;
  background-position: center center;
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
  return (
    <HeroContainer url={backgrouldUrl}>
      <MainContainer>
        <Carousel>
          <HeroInner url={backgrouldUrl}>
            <HeroInfo>
              <h1>Matrículas Abiertas</h1>
              <p>
                La U de las oportunidades.{' '}
                Matricúlate hoy mismo.{' '}
                Estudia en cualquiera de nuestras 8 sedes.{' '}
                <em>#estudiaenISAE</em>
              </p>
              <MainButton
                background={colors.primaryYellow}
                color={colors.primaryBlue}
                link="#0"
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
          <HeroInner url={backgrouldUrl}>
            <HeroInfo>
              <h1>Matrículas Abiertas</h1>
              <p>
                La U de las oportunidades.{' '}
                Matricúlate hoy mismo.{' '}
                Estudia en cualquiera de nuestras 8 sedes.{' '}
                <em>#estudiaenISAE</em>
              </p>
              <MainButton
                background={colors.primaryYellow}
                color={colors.primaryBlue}
                link="#0"
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
      </MainContainer>
    </HeroContainer>
  );
}

export default connect(HomeHero);