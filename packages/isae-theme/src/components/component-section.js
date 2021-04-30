import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';

const Section = styled.div`
  background-color: ${props => props.bgColor ? props.bgColor : colors.white};
  background-image: ${props => props.bgImage ? url(props.bgImage) : 'none'};
  background-repeat: no-repeat;
  background-size: 100%;  
  padding: 8rem 0;
`;

const ComponentSection = ({ bgImage, bgColor, children }) => {
  return(
    <Section bgImage={bgImage} bgColor={bgColor}>
      {children}
    </Section>
  );
}

export default ComponentSection;