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
    gap: ${props => props.med_gap ? props.med_gap : props.gap}
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(${props => props.med_columns ? props.med_columns : '1'}, 1fr);
  }

  @media (max-width: 412px) {
    grid-template-columns: repeat(${props => props.small_columns ? props.small_columns : '1'}, 1fr);
    gap: ${props => props.small_gap ? props.small_gap : props.gap}
  }
`;

const Grid = ({ columns, small_columns, rows, gap, med_gap, small_gap, med_columns, style, children }) => (
  <GridContainer
    columns={columns}
    small_columns={small_columns}
    med_columns={med_columns}
    gap={gap}
    med_gap={med_gap}
    small_gap={small_gap}
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