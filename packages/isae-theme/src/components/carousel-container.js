import React from 'react';
import { styled } from 'frontity';

const CarouselContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: ${props => props.gap};
  overflow-x: hidden;
   & > * {
     flex-shrink: 0;
   }
`;

const Carousel = ({ columns, gap, children }) => {
  return (
    <CarouselContainer
      columns={columns}
      gap={gap}
    >
      {children}
    </CarouselContainer>
  );
};

export default Carousel;