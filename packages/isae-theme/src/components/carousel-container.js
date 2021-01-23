import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
  padding-bottom: 4rem;
  font-weight: 500;
`;

const CarouselButtons = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 12px;
  width: 120px;
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
  box-sizing: content-box;
  border-width: 6px;
  border-style: solid;
  border-color: ${props => props.primary ? colors.primaryBlue : colors.white};
`;

const Carousel = ({ columns, gap, children }) => {
  return (
    <>
      <CarouselContainer
        columns={columns}
        gap={gap}
      >
        {children}
      </CarouselContainer>
      <CarouselButtons columns={columns}>
        <Button primary></Button>
        <Button></Button>
        <Button></Button>
      </CarouselButtons>
    </>
  );
};

export default Carousel;