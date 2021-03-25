import React from 'react';
import { styled } from 'frontity';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: ${props => props.gap};
  transition: all 0.5s ease-in-out;

  @media (max-width: 834px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: ${props => props.small_columns ? props.small_columns : '1fr'};
  }
`;

const Grid = ({ columns, small_columns, rows, gap, style, children }) => (
  <GridContainer
    columns={columns}
    small_columns={small_columns}
    gap={gap}
    rows={rows}
    style={style}
  >
    {children}
  </GridContainer>
)

export default Grid;

Grid.propTypes = {
  columns: PropTypes.string,
  gap: PropTypes.string
};