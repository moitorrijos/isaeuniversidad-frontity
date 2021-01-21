import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';

const CarouselContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: ${props => props.gap};
  padding-bottom: 4rem;
  font-weight: 500;

   & > * {
     width: 380px;
     flex-shrink: 0;
   }
`;

const CarouselButtons = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: 100px;
  margin: 0 auto 4rem;
`;

const Button = styled.button`
  appearance: none;
  padding: 0;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${colors.primaryText30};
  cursor: pointer;
  border: none;
  outline: 0;

  &:first-of-type {
    box-sizing: content-box;
    border: 6px solid ${colors.primaryBlue};
  }
`;

const Carousel = ({ columns, gap, width, children }) => {
  return (
    <>
      <CarouselContainer
        columns={columns}
        gap={gap}
      >
        {children}
      </CarouselContainer>
      <CarouselButtons>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </CarouselButtons>
    </>
  );
};

export default Carousel;