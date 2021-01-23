import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const SlimCardContainer = styled.div`
  display: block;
  border-radius: 18px;
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;
  text-decoration: none;
`;

const SlimCardImage = styled.figure`
  margin: 0;
  img {
    border-radius: 14px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;

const SlimCardInfo = styled(Link)`
  color: ${colors.primaryText100};
  padding: 1rem 1rem 2rem;
`;

const SlimCardItem = ({ title, link, alt_text, source_url }) => {
  return (
    <SlimCardContainer>
      <SlimCardImage>
        {source_url && (
          <Image src={source_url} alt={alt_text} />
        )}
      </SlimCardImage>
      <SlimCardInfo link={link}>
        <h4>{title.rendered}</h4>
      </SlimCardInfo>
    </SlimCardContainer>
  );
}

export default SlimCardItem;