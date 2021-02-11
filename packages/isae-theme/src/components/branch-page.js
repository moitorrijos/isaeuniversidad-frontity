import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import FilterButtons from './filter-buttons';

const BranchHeader = styled.h2`
  max-width: 700px;
  margin: 8rem auto 1rem;
  text-align: center;
  color: ${colors.primaryBlue};
`;

const BranchParagraph = styled.p`
  max-width: 600px;
  margin: 0 auto 6rem;
  font-size: 18px;
  color: ${colors.primaryText50};
  text-align: center;
`;

const BranchPage = ({ state }) => {
  const branches = state.source.get(state.router.link);
  const { acf } = state.source[branches.type][branches.id]
  function filterButton(slug) {
    console.log(slug);
  }
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={acf.ciudad}
        description={acf.direccion}
        imageUrl={acf.foto.url}
      />
      <BranchHeader>Oferta Académica</BranchHeader>
      <BranchParagraph>Disponible en la sede de {acf.ciudad}</BranchParagraph>
      {acf.ofertas_academicas && <FilterButtons>
          <button onClick={ () => { filterButton("all") } } primary={true}>Todo</button>
          {acf.ofertas_academicas.map(oferta => {
            const { id, title, slug } = state.source[oferta.post_type][oferta.ID];
            return(
              <button key={id} onClick={ () => { filterButton(slug)} } primary={false}>{title.rendered}</button>
            )
          })}
        </FilterButtons>}
    </>
  );
}

export default connect(BranchPage);