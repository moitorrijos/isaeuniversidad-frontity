import React from 'react';
import MainContainer from '../main-container';
import Image from "@frontity/components/image";
import { connect, styled } from 'frontity';

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
`;


const HomeLogos = ({ state }) => {
  const homeLogos = [
    'redulac-rrd',
    'auppa',
    'rep-wermap',
    'ninos',
    'omep',
    'latino-america',
    'aualcpi',
    'inca',
    'consejo-de-rectores-de-panama',
    'auprica'
    ]
  return(
    <LogosContainer>
      <MainContainer>
        <ImageGrid>
          {homeLogos.map(logo => (
            <Image
              src={`${state.source.url}/wp-content/uploads/2021/01/${logo}.png`}
              alt="REDULAC/RRD"
            />
          ))}
        </ImageGrid>
      </MainContainer>
    </LogosContainer>
  )
}

export default connect(HomeLogos);