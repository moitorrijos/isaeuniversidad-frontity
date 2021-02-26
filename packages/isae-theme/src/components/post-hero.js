import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Image from "@frontity/components/image";
import createMarkup from '../helpers/create-markup';
import MainContainer from './main-container';

const Hero = styled.div`
  background-image: url(${props => props.background});
  background-color: ${colors.lightGray};
  background-position: left top;
  background-size: 30%;
  background-repeat: no-repeat;
  min-height: 95vh;
  position: relative;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 2rem 288px 288px 1fr;
  grid-template-rows: 5rem auto 5rem;
  align-items: center;
`;

const InfoCard = styled.div`
  border-radius: 1rem;
  background-color: ${colors.white};
  padding: 4rem;
  box-shadow: ${effects.boxShadow};
  height: 40%;
  line-height: 1.7;
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  position: relative;
  z-index: 2;
  font-size: 1.2rem;

  h1 {
    margin-top: 0;
    font-size: 32px;
    line-height: 1.1;
    color: ${colors.primaryBlue};
  }
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
  }  
`;

const PostHero = ({ background, title, description, imageUrl, direccion, telefono, celular }) => {
  return(
    <Hero background={background}>
      <MainContainer>
        <HeroContainer>
          <InfoCard>
            <h1>{title}</h1>
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