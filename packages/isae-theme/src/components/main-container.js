import React from 'react';
import { styled } from 'frontity';

const Container = styled.div`
  max-width: 1400px;
  padding-left: 4rem;
  padding-right: 4rem;
  margin-left: auto;
  margin-right: auto;
  overflow-x: hidden;
`;

const MainContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
)

export default MainContainer;