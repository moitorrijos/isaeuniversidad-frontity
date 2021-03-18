import React from 'react';
import { styled } from 'frontity';

const CarouselContainer = styled.div`
  position: relative;
  height: ${props => props.height};

  & > div {
    position: absolute;
    top: 0;
  }
`;

const Carousel = ({ height, children }) => {
  return(
    <CarouselContainer height={height}>
      {children}
    </CarouselContainer>
  );
}

export default Carousel;