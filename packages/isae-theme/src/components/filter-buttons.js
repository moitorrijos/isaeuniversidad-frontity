import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';

const FilterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto 8rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;

  a, button {
    font-size: 1rem;
    appearance: none;
    padding: 16px 40px;
    border-radius: 8px;
    border: 1px solid ${colors.secondaryBlue};
    outline: none;
    color: ${colors.secondaryBlue};
    background-color: ${colors.white};
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:first-of-type {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }

    &:hover {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }
  }
`;

const FilterButtons = ({ children }) => {
  return (
    <FilterContainer>
      {children}
    </FilterContainer>
  )
}

export default FilterButtons;