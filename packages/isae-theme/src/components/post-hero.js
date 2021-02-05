import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Image from "@frontity/html2react/processors/image";

const HeroContainer = styled.div`
  background-image: url(${props => props.background});
  background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 8rem 288px 288px 1fr;
  grid-template-rows: 5rem 432px 5rem;
  align-items: center;
  position: relative;
`;

const InfoCard = styled.div`
  border-radius: 1rem;
  background-color: ${colors.white};
  padding: 3rem 4rem;
  box-shadow: ${effects.boxShadow};
  grid-column: 2 / 4;
  grid-row: 2 / 3;
`;

const InfoImage = styled.figure`
  grid-column: 3 / 5;
  grid-row: 1 / 4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem 0 0 1rem;
  }  
`;

const PostHero = ({ background, title, description, imageUrl }) => {
  return(
    <HeroContainer background={background}>
      <InfoCard>
        <h1>{title}</h1>
        <p>{description}</p>
      </InfoCard>
      <InfoImage>
        <Image alt={title} src={imageUrl} height="622" />
      </InfoImage>
    </HeroContainer>
  );
}

export default PostHero;