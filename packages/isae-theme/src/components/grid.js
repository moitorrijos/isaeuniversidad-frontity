import React from 'react';
import { styled } from 'frontity';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
`;

const Grid = ({ columns, gap, children }) => (
  <GridContainer columns={columns} gap={gap}>
    {children}
  </GridContainer>
)

export default Grid;

Grid.propTypes = {
  columns: PropTypes.string,
  gap: PropTypes.string
};