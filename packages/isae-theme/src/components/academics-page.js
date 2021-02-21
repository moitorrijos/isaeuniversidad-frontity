import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import FilterButtons from './filter-buttons';
import ContactForm from './base/contact-form';
import CareerCards from './career-cards';

const FilterParagraph = styled.p`
  max-width: 500px;
  margin: 8rem auto 2rem;
  text-align: center;
  color: ${colors.primaryText50};
  font-size: 18px;
`;


const AcademicsPage = ({ state }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title, featured_image_src, slug } = state.source[academics.type][academics.id];
  const { descripcion } = acf;
  const carreras = state.source.get('/carrera').items;
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
        <CareerCards carreras={carreras} oferta={slug} />
        <ContactForm />
    </>
  );

}

export default connect(AcademicsPage);