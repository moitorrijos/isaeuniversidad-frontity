import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import Image from '@frontity/components/image';

const ValuesCardContainer = styled.div`
  h3 {
    color: ${colors.primaryBlueBright};
  }
`;

const ValuesImage = styled.figure`
  img {
    width: 100%;
    height: 176px;
    object-fit: cover;
    border-radius: 18px;
  }
`;

const ValuesCard = ({ image_source, image_alt, title, description }) => {
  return (
    <ValuesCardContainer>
      <ValuesImage>
        <Image src={image_source} alt={image_alt} />
      </ValuesImage>
      <h3>{title}</h3>
      <p>{description}</p>
    </ValuesCardContainer>
  );
}

export default ValuesCard;