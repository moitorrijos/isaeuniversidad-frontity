import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Image from "@frontity/components/image";
import createMarkup from '../helpers/create-markup';

const HeroContainer = styled.div`
  background-image: url(${props => props.background});
  background-color: ${colors.lightGray};
  background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 8rem 288px 288px 1fr;
  grid-template-rows: 5rem auto 5rem;
  align-items: center;
  position: relative;
  min-height: 95vh;
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

  h1 {
    margin-top: 0;
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
    border-radius: 1rem 0 0 1rem;
  }  
`;

const PostHero = ({ background, title, description, imageUrl }) => {
  return(
    <HeroContainer background={background}>
      <InfoCard>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={createMarkup(description)} />
      </InfoCard>
      <InfoImage>
        <Image alt={title} src={imageUrl} height="622" />
      </InfoImage>
    </HeroContainer>
  );
}

export default PostHero;