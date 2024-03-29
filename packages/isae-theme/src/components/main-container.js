import React from 'react';
import { styled } from 'frontity';

const Container = styled.div`
  max-width: 1400px;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 412px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const MainContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default MainContainer;