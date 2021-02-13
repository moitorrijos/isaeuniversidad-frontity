import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import FilterButtons from './filter-buttons';
import Grid from './grid';

const FilterParagraph = styled.p`
  max-width: 500px;
  margin: 8rem auto 2rem;
  text-align: center;
  color: ${colors.primaryText50};
  font-size: 18px;
`;

const AvailableCareers = styled.div``;

const CarrerCard = styled.div`

`;

const AcademicsPage = ({ state }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title, featured_image_src } = state.source[academics.type][academics.id];
  const { descripcion } = acf;
  const carreras = state.source.carrera;
  const carreras_disponibles = carreras.filter( carrera => `/${carrera.acf.oferta_academica.post_type}/${carrera.acf.oferta_academica.post_name}` === academics);
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
      <FilterParagraph>Filtrar {title.rendered} según sede</FilterParagraph>
      {acf.sedes && 
        <FilterButtons>
          {acf.sedes.map(sede => {
            const { id, slug, acf } = state.source.sede[sede.ID];
            return(
              <button
                key={id}
                id={slug}
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
        </FilterButtons>}
        <AvailableCareers>
          <h1>Carreras Disponibles</h1>
          <Grid columns="4" gap="20px">
            {carreras_disponibles.map(carrera => {
              return(
                <CareerCard>
                  <figure>
                    <Image alt={carrera.title.rendered} src={carrera.featured_image_src} height="240" />
                  </figure>
                  <h3>{carrera.title.rendered}</h3>
                </CareerCard>
              )
            })}
          </Grid>
        </AvailableCareers>
    </>
  );

}

export default connect(AcademicsPage);