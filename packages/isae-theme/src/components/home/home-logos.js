import React from 'react';
import MainContainer from '../main-container';
import Image from "@frontity/components/image";
import { connect, styled, keyframes } from 'frontity';

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const LogosContainer = styled.div`
  padding: 8rem 0;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 1px;

  img {
    mix-blend-mode: multiply;
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HomeLogos = ({ state }) => {
  const homeLogos = [
    {id: 1, name: 'repowermap'},
    {id: 2, name: 'redular'},
    {id: 3, name: 'omep'},
    {id: 4, name: 'inca'},
    {id: 5, name: 'ecalfor'},
    {id: 6, name: 'consejo-de-rectores'},
    {id: 7, name: 'aurpica'},
    {id: 8, name: 'AUPPA'},
    {id: 9, name: 'aualcpi'}
    ]
  return(
    <LogosContainer>
      <MainContainer>
        <ImageGrid>
          {homeLogos.map(logo => (
            <Image
              key={logo.id}
              src={`${state.source.url}/wp-content/uploads/2021/11/${logo.name}.jpg`}
              alt={`Universidad ${logo.name} Logo`}
            />
          ))}
        </ImageGrid>
      </MainContainer>
    </LogosContainer>
  )
}

export default connect(HomeLogos);