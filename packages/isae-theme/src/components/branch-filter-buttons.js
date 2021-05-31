import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';

const FilterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;

  p {
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

    &:hover {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }
  }
`;

const BranchFilterButtons = ({ state, branches }) => {
  const [ currentItem, setCurrentItem ] = useState('campus-central');
  function filterButton(slug) {
    setCurrentItem(slug); 
  }
  return (
    <FilterContainer>
      {branches.map(branch => {
        const { id, slug, acf } = branch.ID ? state.source.sede[branch.ID] : state.source.sede[branch.id];
        return(
          <p
            key={id}
          >
              {acf.ciudad}
          </p>
        )
      })}
    </FilterContainer>
  )
}

export default connect(BranchFilterButtons);