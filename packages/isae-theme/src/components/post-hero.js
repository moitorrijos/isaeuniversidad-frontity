import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Image from "@frontity/components/image";
import createMarkup from '../helpers/create-markup';
// import MainContainer from './main-container';

const Hero = styled.div`
  background-image: url(${props => props.background});
  background-color: ${props => props.bgColor ? props.bgColor : colors.lightGray};
  background-position: left top;
  background-size: 30%;
  background-repeat: no-repeat;
  min-height: 95vh;
  position: relative;

  @media (max-width: 834px) {
    min-height: auto;
  }
`;

const MainContainer = styled.div`
  max-width: 1400px;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 834px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 600px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 288px 288px 1fr;
  grid-template-rows: 5rem auto 5rem;
  align-items: center;

  @media (max-width: 834px) {
    grid-template-columns: 200px 200px 200px 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px 50px auto;
  }
`;

const InfoCard = styled.div`
  border-radius: 1rem;
  background-color: ${colors.white};
  padding: 4rem;
  box-shadow: ${effects.boxShadow};
  line-height: 1.7;
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  position: relative;
  z-index: 2;
  font-size: 1.2rem;
  min-height: 400px;

  h1 {
    margin-top: 0;
    font-size: 42px;
    line-height: 1.1;
    color: ${colors.primaryBlue};
    
    @media (max-width: 834px) {
      font-size: 38px;
    }
  }

  @media (max-width: 834px) {
    font-size: 1rem;
    grid-column: 1 / 3;
    min-height: auto;
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 2rem 1rem;
    margin: 0 1rem;
    grid-column: 1 / 2;
    grid-row: 2 / 4;
    font-size: 1rem;
    align-self: start;
  }
`;

const Provincia = styled.p`
  margin-top: -30px;
  margin-bottom: 30px;
`;

const InfoImage = styled.figure`
  grid-column: 3 / 5;
  grid-row: 2 / 3;
  margin: 0;
  position: relative;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;

    @media (max-width: 600px) {
      border-radius: 0;
    }
  }

  @media (max-width: 834px) {
    grid-column: 2 / 5;
    grid-row: 1 / 4;
  }

  @media (max-width: 600px) {
    align-self: stretch;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;

const PostHero = ({ background, bgColor, title, provincia, description, imageUrl, direccion, telefono, celular }) => {
  return(
    <Hero background={background} bgColor={bgColor}>
      <MainContainer>
        <HeroContainer>
          <InfoCard>
            <h1>{title}</h1>
            { provincia ? ( <Provincia>{provincia}</Provincia> ) : null }
            { direccion ?
              ( <p>
                <strong>Dirección:</strong>{" "}
                <span dangerouslySetInnerHTML={createMarkup(direccion)} />
              </p> )
              :
              ( <div dangerouslySetInnerHTML={createMarkup(description)} /> )
            }
            {telefono && <p><strong>Teléfono:</strong>{" "}{telefono}</p>}
            {celular && <p><strong>WhatsApp:</strong>{" "}{celular}</p>}
          </InfoCard>
          <InfoImage>
            <Image alt={title} src={imageUrl} height="622" />
          </InfoImage>
        </HeroContainer>
      </MainContainer>
    </Hero>
  );
}

export default PostHero;