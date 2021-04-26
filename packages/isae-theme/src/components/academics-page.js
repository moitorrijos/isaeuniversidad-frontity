import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import ContactForm from './base/contact-form';
import MainContainer from './main-container';
import Grid from './grid';
import SingleCard from './base/single-card';

const AcademicHeading = styled.p`
  max-width: 420px;
  margin: 6rem auto 2rem;
  color: ${colors.primaryBlue};
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
  font-weight: 500;
  margin-bottom: 6rem;

  @media (max-width: 600px) {
    margin-bottom: 4rem;
  }
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

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const AcademicsPage = ({ state, actions }) => {
  const academics = state.source.get(state.router.link);
  const academic_slug = academics.link.split('/').filter(el => el)[1];
  const { acf, title, featured_image_src } = state.source[academics.type][academics.id];
  const paginas_carrera = state.source.get('/carrera').totalPages;
  for (let i = 1; i <= paginas_carrera; i++) {
    useEffect(() => {
      actions.source.fetch('/carrera/page/' + i);
    }, [])
  }
  const carreras = Object.values(state.source.carrera);
  const { descripcion } = acf;
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
      
        {acf.sedes && <>
          <AcademicHeading>Filtrar {title.rendered} según Sede</AcademicHeading>
          <FilterContainer>
            {acf.sedes.map(branch => {
              const { ID, slug, acf } = branch.ID ? state.source.sede[branch.ID] : state.source.sede[branch.id];
              return(
                <button
                  key={ID}
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
      {carreras && <AvailableCareers>
        <AcademicHeading>Carreras Disponibles</AcademicHeading>
        <MainContainer>
          <Grid columns="4" small_columns="2" gap="20px">
            {carreras.map(carrera => {
              const { id, link, featured_image_src, acf } = carrera;
              const sedes = acf.sedes ? acf.sedes.map(sede => sede.post_name) : [];
              const oferta_academica = acf.oferta_academica ? acf.oferta_academica.post_name : '';
              if ((oferta_academica ===  academic_slug) && (sedes.includes(currentItem))) {
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
      </AvailableCareers>}
      <ContactForm />
    </>
  );

}

export default connect(AcademicsPage);