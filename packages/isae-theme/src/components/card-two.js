import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Image from '@frontity/components/image';
import createMarkup from '../helpers/create-markup';

const CardContainer = styled.div`
  margin: 6rem 0;
  display: grid;
  grid-template-rows: 100px auto auto;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 4rem 2rem;
  background-color: ${colors.white};
  border-radius: 20px;
  transition: all 0.25s ease-in-out;

  @media (max-width: 600px) {
    margin: 0;
  }

  h3 {
    text-align: center;
    line-height: 1.1;
    margin: 0.5rem 0;
    color: ${colors.primaryBlueBright}
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const CardImage = styled.figure`
  width: 80px;
  height: 80px;
  margin: 0;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    object-position: center;
  }
`;

const CardDescription = styled.div`
  align-self: start;
  ul {
    font-size: 0.9rem;
    li {
      margin: 0.75rem 0;
    }
  }
`;

const Card = ({ image_source, title, description, style }) => {
  return (
    <CardContainer style={style}>
      {
         image_source ? <CardImage><Image src={image_source} /> </CardImage>: "" 
      }
      <h3>{title}</h3>
      <CardDescription dangerouslySetInnerHTML={createMarkup(description)} />
    </CardContainer>
  );
}

export default Card;