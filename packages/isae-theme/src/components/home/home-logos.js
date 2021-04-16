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
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;

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
    {id: 1, name: 'redulac-rrd'},
    {id: 2, name: 'auppa'},
    {id: 3, name: 'rep-wermap'},
    {id: 4, name: 'ninos'},
    {id: 5, name: 'omep'},
    {id: 6, name: 'latino-america'},
    {id: 7, name: 'aualcpi'},
    {id: 8, name: 'inca'},
    {id: 9, name: 'consejo-de-rectores-de-panama'},
    {id: 10, name: 'auprica'}
    ]
  return(
    <LogosContainer>
      <MainContainer>
        <ImageGrid>
          {homeLogos.map(logo => (
            <Image
              key={logo.id}
              src={`${state.source.url}/wp-content/uploads/2021/01/${logo.name}.png`}
              alt="REDULAC/RRD"
            />
          ))}
        </ImageGrid>
      </MainContainer>
    </LogosContainer>
  )
}

export default connect(HomeLogos);