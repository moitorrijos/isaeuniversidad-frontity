import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../styles/colors';
import { months } from '../helpers/months';
import { effects } from '../styles/effects';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const SlimCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  transition: all 0.25s ease-in-out;
  text-decoration: none;
  padding: 0 0 8rem;
`;

const SlimCardImage = styled.figure`
  margin: 0;
  width: 100%;
  img {
    border-radius: 14px;
    width: 100%;
    height: 330px;
    object-fit: cover;
  }
`;

const SlimCardInfo = styled(Link)`
  display: grid;
  grid-template-rows: auto 140px auto;
  color: ${colors.primaryText100};
  background-color: ${colors.lightGray};
  border-radius: 12px;
  width: 70%;
  margin-top: -30px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  padding: 1rem 3rem;

  @media (max-width: 1490px) {
    padding: 1rem 2rem;
  }

  h4 {
    font-size: 22px;
    line-height: 1.4;
    margin-top: 10px;
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }

  @media (max-width: 600px) {
    padding: 1rem 1.75rem;
  }
`;

const Date = styled.p`
  font-size: 14px;
`;

const EmptyImage = styled.div`
  width: 100%;
  height: 330px;
  background-image: linear-gradient(${colors.white}, ${colors.lightGray});
  border-radius: 14px;
`;

const AuthorName = styled.p`
  color: ${colors.primaryBlueBright};
`;

const SlimCardItem = ({ state, title, link, source_url, postDate, name, style }) => {
  const placeholder = state.source.url+'/wp-content/uploads/2021/03/placeholder.jpg';
  const day = postDate.getDate();
  const getMonth = postDate.getMonth();
  const year = postDate.getFullYear();
  return (
    <SlimCardContainer style={style}>
      <SlimCardImage>
        {source_url ? (
          <Image src={source_url} alt={title.rendered} width={406} height={330} />
          ) : (<Image src={placeholder} alt={title.rendered} />)}
      </SlimCardImage>
      <SlimCardInfo link={link}>
        <Date>{day} de {months[parseInt(getMonth)]} de {year}</Date>
        <h4>{title.rendered}</h4>
        <AuthorName>{name}</AuthorName>
      </SlimCardInfo>
    </SlimCardContainer>
  );
}

export default connect(SlimCardItem);