import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import ContactForm from './base/contact-form';
import CareerCards from './career-cards';
import BranchFilterButtons from './branch-filter-buttons';

const FilterParagraph = styled.p`
  max-width: 500px;
  margin: 6rem auto 2rem;
  text-align: center;
  color: ${colors.primaryText50};
  font-size: 18px;
`;


const AcademicsPage = ({ state }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title, featured_image_src, slug } = state.source[academics.type][academics.id];
  const { descripcion } = acf;
  const carreras = state.source.get('/carrera').items;
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={title.rendered}
        description={descripcion}
        imageUrl={featured_image_src}
      />
      <FilterParagraph>Filtrar {title.rendered} según sede</FilterParagraph>
      {acf.sedes && <BranchFilterButtons branches={acf.sedes} />}
      <CareerCards carreras={carreras} oferta={slug} />
      <ContactForm />
    </>
  );

}

export default connect(AcademicsPage);