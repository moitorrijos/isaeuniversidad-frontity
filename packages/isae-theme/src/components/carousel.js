import React from 'react';
import { styled } from 'frontity';

const CarouselContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  height: ${props => props.height};

  & > div {
    position: absolute;
    top: 0;
  }

  @media (max-width: 834px) {
    height: ${props => props.med_height ? props.med_height : 'auto' };
  }

  @media (max-width: 600px) {
    height: ${props => props.large_height ? props.large_height : 'auto'};
  }
`;

const Carousel = ({ height, med_height, large_height, style, children }) => {
  return(
    <CarouselContainer
      height={height}
      med_height={med_height}
      large_height={large_height}
      style={style}
    >
      {children}
    </CarouselContainer>
  );
}

export default Carousel;