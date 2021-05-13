import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import Grid from './grid';
import SingleCard from './base/single-card';
import MainContainer from './main-container';

const AvailableCareers = styled.div`
  padding: 2rem 0 8rem;
  
  h2 {
    color: ${colors.primaryBlue};
    text-align: center;
    font-weight: 500;
    margin-bottom: 6rem;

    @media (max-width: 600px) {
      margin-bottom: 4rem;
    }
  }

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const CareerCards = ({ state, carreras, ciudad, campus, slug }) => {
  return(
    <AvailableCareers>
      <h2>Carreras Disponibles en la {ciudad}</h2>
      <MainContainer>
        <Grid columns="4" small_columns="2" gap="20px">
          {carreras.map(carrera => {
            const carrera_disponible = state.source[carrera.type][carrera.id];
            const { id, link, title, featured_image_src, acf } = carrera_disponible;
            const sedes = acf.sedes ? acf.sedes.filter( sede => sede.post_name === campus ) : null;
            const oferta_academica = acf.oferta_academica ? acf.oferta_academica.post_name : '';
            if (
              sedes &&
              sedes.length &&
              ((slug === 'all') || (slug === oferta_academica))) {
              return(
                <SingleCard
                  key={id}
                  link={link}
                  image={featured_image_src}
                  title={title}
                />
              )
            } else {
              return null;
            }
          })}
        </Grid>
      </MainContainer>
    </AvailableCareers>
  );
}

export default connect(CareerCards);