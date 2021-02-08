import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';

const BranchHeader = styled.h2`
  max-width: 700px;
  margin: 8rem auto 1rem;
  text-align: center;
  color: ${colors.primaryBlue};
`;

const BranchParagraph = styled.p`
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 18px;
  color: ${colors.primaryText50};
  text-align: center;
`;

const BranchPage = ({ state }) => {
  const branches = state.source.get(state.router.link);
  const { acf } = state.source[branches.type][branches.id]
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
    </>
  );
}

export default connect(BranchPage);