import React from 'react';
import { styled } from 'frontity';
import colors from '../../styles/colors';

const Section = styled.div`
  padding: 8rem;
  background-image: url(${props => props.background ? props.background : ''});
  background-size: cover;
  text-align: center;

  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 412px) {
    padding: 4rem 1rem;
  }

  div {
    max-width: 615px;
    margin: 0 auto;
    color: ${colors.white};
    font-size: 1.4rem;

    span, a {
      display: block;
      font-size: 1.8rem;
      margin: 2rem 0;
      color: ${colors.white};
      text-decoration: underline;

      @media (max-width: 600px) {
        font-size: 1.4rem;
      }

      @media (max-width: 412px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const CenteredSection = ({ background, children }) => {
  return (
    <Section background={background}>
      {children}
    </Section>
  );
}

export default CenteredSection;