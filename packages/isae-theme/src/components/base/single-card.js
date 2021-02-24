import React from 'react';
import { styled } from 'frontity';
import { effects } from '../../styles/effects';
import colors from '../../styles/colors';
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;

  figure {
    width: 100%;
    img {
      width: 100%;
      height: 260px;
      border-radius: 20px;
      object-fit: cover;
      object-position: center;
      transition: all 0.25s ease-in-out;
    }
  }

  h3 {
    text-align: center;
    font-size: 22px;
    margin-top: 1rem;
    color: ${colors.primaryBlue};
  }

  &:hover img {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const SingleCard = ({ link, image, title }) => {
  return(
    <CardContainer link={link}>
      <figure>
        <Image alt={title.rendered} src={image} height="240" />
      </figure>
      <h3>{title.rendered}</h3>
    </CardContainer>
  );
}

export default SingleCard;