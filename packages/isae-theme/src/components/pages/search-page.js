import React, { useEffect } from "react";
import { connect } from "frontity";
import SlimHeroPost from '../slim-hero-post';

const SearchPage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  let searchQuery = parse.query["q"];
  const resultados = searchQuery ? `Resultados para: ${searchQuery.toString().replace(/\_/g, ' ')}` : '';
  return (
    <SlimHeroPost
      title="Página de búsqueda"
      background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
      description={resultados}
      featured_image={state.source.url + "/wp-content/uploads/2021/11/hombre-usando-laptop-feliz-con-cafe-1-scaled.webp"}
    />
  );
}

export default connect(SearchPage);