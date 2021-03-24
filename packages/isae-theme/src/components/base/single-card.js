import React from 'react';
import { connect, styled } from 'frontity';
import { effects } from '../../styles/effects';
import colors from '../../styles/colors';
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0 10px;

  @media (max-width: 834px) {
    padding: 0;
  }

  figure {
    width: 100%;
    img {
      width: 100%;
      height: 280px;
      border-radius: 20px;
      object-fit: cover;
      object-position: center;
      transition: all 0.25s ease-in-out;

      @media (max-width: 600px) {
        height: 120px;
      }
    }
  }

  h3 {
    text-align: center;
    font-size: 22px;
    margin-top: 1rem;
    color: ${colors.primaryBlue};

    @media (max-width: 600px) {
      font-size: 18px;
    }
  }

  &:hover img {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const SingleCard = ({ state, link, image, title }) => {
  const placeholder = state.source.url+'/wp-content/uploads/2021/03/placeholder.jpg';
  return(
    <CardContainer link={link}>
      <figure>
        {image ?
          <Image alt={title.rendered} src={image} height="240" />
          :
          <Image alt="" src={placeholder} height="240" />
        }
        
      </figure>
      <h3>{title.rendered}</h3>
    </CardContainer>
  );
}

export default connect(SingleCard);