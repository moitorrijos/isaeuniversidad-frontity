import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import ContactForm from './base/contact-form';
import MainContainer from './main-container';
import Grid from './grid';
import SingleCard from './base/single-card';

const FilterParagraph = styled.p`
  max-width: 500px;
  margin: 6rem auto 2rem;
  text-align: center;
  color: ${colors.primaryText50};
  font-size: 18px;
`;

const FilterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4rem;
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

    &:hover {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }
  }
`;

const AvailableCareers = styled.div`
  padding-bottom: 4rem;
  
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

const AcademicsPage = ({ state, actions }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title, featured_image_src } = state.source[academics.type][academics.id];
  const { descripcion, carreras } = acf;
  const nombre_carreras = carreras ? carreras.map(carrera => `/carrera/${carrera.post_name}/`) : null;
  if (nombre_carreras) {
    nombre_carreras.forEach(carrera => {
      useEffect(() => {
        actions.source.fetch(carrera);
      })
    })
  }
  const [ currentItem, setCurrentItem ] = useState('campus-central');
  function filterButton(slug) {
    setCurrentItem(slug);
  }
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={title.rendered}
        description={descripcion}
        imageUrl={featured_image_src}
      />
      
        {carreras && acf.sedes && <>
          <FilterParagraph>Filtrar {title.rendered} según sede</FilterParagraph>
          <FilterContainer>
            {acf.sedes.map(branch => {
              const { id, slug, acf } = branch.ID ? state.source.sede[branch.ID] : state.source.sede[branch.id];
              return(
                <button
                  key={id}
                  onClick={ () => { filterButton(slug) }}
                  style={ currentItem === slug ? {
                    backgroundColor: colors.secondaryBlue,
                    color: colors.white
                  } : {
                    backgroundColor: colors.white,
                    color: colors.secondaryBlue
                  } }
                >
                    {acf.ciudad}
                </button>
              )
            })}
        </FilterContainer>
      </>}
      {academics.isReady && <AvailableCareers>
        <h2>Carreras Disponibles</h2>
        <MainContainer>
          <Grid columns="4" small_columns="2" gap="20px">
            {[...carreras].reverse().map(career => {
              const carrera_disponible = state.source.carrera[career.ID];
              const sedes = acf.sedes;
              const branch_names = sedes ? sedes.map(sede => sede.post_name) : null;
              if ( carrera_disponible && branch_names && branch_names.includes(currentItem) ) {
                return(
                  <SingleCard
                    key={carrera_disponible.ID}
                    link={carrera_disponible.link}
                    image={carrera_disponible.featured_image_src}
                    title={carrera_disponible.title}
                  />
                )
              } else {
                return null;
              }
            })}
          </Grid>
        </MainContainer>
      </AvailableCareers>}
      <ContactForm />
    </>
  );

}

export default connect(AcademicsPage);