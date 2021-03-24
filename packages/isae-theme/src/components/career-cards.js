import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import Grid from './grid';
import SingleCard from './base/single-card';
import MainContainer from './main-container';

const AvailableCareers = styled.div`
  max-width: 1200px;
  margin: 8rem auto;
  h2 {
    color: ${colors.primaryBlue};
    text-align: center;
    font-weight: 500;
    margin-bottom: 8rem;

    @media (max-width: 600px) {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 600px) {
    margin: 4rem auto;
  }
`;

const CareerCards = ({ state, carreras }) => {
  return(
    <AvailableCareers>
      <h2>Carreras Disponibles</h2>
      <MainContainer>
        <Grid columns="4" small_columns="2" gap="20px">
          {[...carreras].reverse().map(carrera => {
            const carrera_disponible = state.source[carrera.type][carrera.id];
            const { id, link, title, featured_image_src } = carrera_disponible;
            return(
              <SingleCard
                key={id}
                link={link}
                image={featured_image_src}
                title={title}
              />
            )
          })}
        </Grid>
      </MainContainer>
    </AvailableCareers>
  );
}

export default connect(CareerCards);