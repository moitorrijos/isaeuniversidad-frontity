import React from 'react';
import { connect } from 'frontity';
import PostHero from './post-hero';

const AcademicsPage = ({ state }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title } = state.source[academics.type][academics.id]
  const { descripcion } = acf;
  return(
    <PostHero
      background="http://isae.test/wp-content/uploads/2021/01/background-isae-2.svg"
      title={title.rendered}
      description={descripcion}
      imageUrl="http://isae.test/wp-content/uploads/2021/02/Rectangle.jpg"
    />
  );

}

export default connect(AcademicsPage);