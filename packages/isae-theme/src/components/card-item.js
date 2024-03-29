import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";
import { effects } from '../styles/effects';


const CardContainer = styled(Link)`
  display: block;
  padding: 1rem 1rem 2rem;
  border-radius: 22px;
  background-color: ${colors.lightGray};
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
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

  h2 {
    color: ${colors.primaryBlueBright};
    font-size: 28px;
    margin: 28px 0 10px;
  }

  p {
    margin: 4px 0;
    color: ${colors.primaryText80};
    font-size: 18px;
  }
`;

const CardItem = ({ link, data, title, style }) => {
  return (
    <CardContainer link={link} style={style}>
      <CardImage>
        <Image
          alt={title.rendered}
          src={data.foto.sizes.medium_large}
          height="300"
        />
      </CardImage>
      <CardInfo>
        <h2>{data.ciudad}</h2>
        <p>{data.provincia}</p>
      </CardInfo>
    </CardContainer>
  );
}

export default CardItem;