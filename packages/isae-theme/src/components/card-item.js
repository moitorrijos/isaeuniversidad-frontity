import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const CardContainer = styled(Link)`
  display: block;
  padding: 1rem 1rem 2rem;
  border-radius: 18px;
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;
  text-decoration: none;
`;

const CardImage = styled.figure`
  margin: 0;
  img {
    border-radius: 14px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  color: ${colors.primaryText100};
`;

const CardItem = ({ link, data, title }) => {
  return (
    <CardContainer link={link}>
      <CardImage>
        <Image alt={title.rendered} src={data.foto.sizes.medium_large} />
      </CardImage>
      <CardInfo>
        <h2>{data.ciudad}</h2>
        <p>{data.provincia}</p>
      </CardInfo>
    </CardContainer>
  );
}

export default CardItem;