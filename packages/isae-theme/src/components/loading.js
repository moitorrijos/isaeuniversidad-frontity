import React from 'react';
import { styled, keyframes } from 'frontity';
import colors from '../styles/colors';

const SpinnerContainer = styled.div`
  height: 80vh;
  background-color: ${colors.white};
  display: grid;
  place-items: center;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;

  position: relative;
  margin: 100px auto;
`;

const bounce = keyframes`
  0%, 100% { 
    transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
  }
`;

const Bounce1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${colors.primaryBlueBright};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2.0s infinite ease-in-out;
`;

const Bounce2 = styled(Bounce1)`
  animation-delay: -1.0s;
`;

const Loading = () => (
  <SpinnerContainer>
    <Spinner>
      <Bounce1 />
      <Bounce2 />
    </Spinner>
  </SpinnerContainer>
);

export default Loading;