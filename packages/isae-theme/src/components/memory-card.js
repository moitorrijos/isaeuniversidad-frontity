import React from 'react'
import { styled } from 'frontity';
import colors from '../styles/colors';
import Image from "@frontity/components/image";
import Link from "@frontity/components/link";

const MemoryCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;

  @media (max-width: 600px) {
    padding: 2rem 0rem;
  }

  h3 {
    color: ${colors.primaryBlue};
  }

  img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 12px;
  }

  a {
    color: ${colors.primaryBlue};
    text-align: center;
  }
`;

const MemoryCard = ({ memory, nombre }) => {
  return (
    <MemoryCardSection>
      <Image src={memory.icono.url} height={80} />
      <h3>{memory.ano}</h3>
      <Link link={memory.url}>Descargar {nombre}</Link>
    </MemoryCardSection>
  )
}

export default MemoryCard