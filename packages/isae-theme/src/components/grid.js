import React from 'react';
import { styled } from 'frontity';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
  transition: all 0.5s ease-in-out;
`;

const Grid = ({ columns, rows, gap, style, children }) => (
  <GridContainer columns={columns} gap={gap} rows={rows} style={style}>
    {children}
  </GridContainer>
)

export default Grid;

Grid.propTypes = {
  columns: PropTypes.string,
  gap: PropTypes.string
};