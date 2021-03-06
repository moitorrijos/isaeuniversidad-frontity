import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { months } from '../helpers/months';
import Link from "@frontity/components/link";

const PostCardLink = styled(Link)`
  padding: 2rem 3rem 4rem;
  text-decoration: none;
  color: ${colors.primaryText80};
  height: 297px;
  border-radius: 24px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${colors.primaryBlueBright};
    color: ${colors.white};
    border-radius: 20px;
  }
`;

const PostDate = styled.p`
  align-self: flex-start;
`;

const PostTitle = styled.h3`
  align-self: flex-start;
  margin: 0;
`;

const PostAuthor = styled.p`
  align-self: flex-end;
  color: ${colors.primaryBlueBright};

  ${PostCardLink}:hover &{
    color: ${colors.white};
  }
`;

const PostCard = ({ link, day, getMonth, year, title, name}) => {
  return(
    <PostCardLink link={link}>
      <PostDate>{day} de {months[parseInt(getMonth)]} de {year}</PostDate>
      <PostTitle>{title.rendered}</PostTitle>
      <PostAuthor>{name}</PostAuthor>
    </PostCardLink>
  );
}

export default PostCard;