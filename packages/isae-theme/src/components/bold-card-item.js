import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import { months } from '../helpers/months';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const BoldCardContainer = styled(Link)`
  display: block;
  padding: 1rem 1rem 2rem;
  border-radius: 22px;
  background-color: ${colors.white};
  transition: all 0.25s ease-in-out;
  text-decoration: none;
  margin-bottom: 8rem;

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const BoldCardImage = styled.figure`
  margin: 0;
  img {
    border-radius: 14px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const BoldCardInfo = styled.div`
  color: ${colors.primaryText100};
  padding: 0 2rem;

  p {
    margin: 2rem 0;
  }

  h2 {
    font-size: 24px;
    line-height: 1.2;
  }
`;

const BoldCardItem = ({ activityDate, link, title, source_url }) => {
  const day = activityDate.getDate();
  const getMonth = activityDate.getMonth();
  const year = activityDate.getFullYear();
  return (
    <BoldCardContainer link={link}>
      <BoldCardImage>
        <Image alt={title.rendered} src={source_url} height="300" />
      </BoldCardImage>
      <BoldCardInfo>
        <p>{day} de {months[parseInt(getMonth)]} de {year}</p>
        <h2>{title.rendered}</h2>
      </BoldCardInfo>
    </BoldCardContainer>
  );
}

export default BoldCardItem;