import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import FilterButtons from './filter-buttons';
import CareerCards from './career-cards';
import AcademicUnits from './academic-units';
import HomeNews from './home/home-news';

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

const BranchPage = ({ state, actions }) => {
  const branches = state.source.get(state.router.link);
  const { acf } = state.source[branches.type][branches.id];
  const [ currentItem, setCurrentItem ] = useState('all');
  const currentItemStyle = {
    backgroundColor: colors.secondaryBlue,
    color: colors.white
  };
  const itemStyle = {
    color: colors.secondaryBlue,
    backgroundColor: colors.white
  };
  function filterButton(slug) {
    setCurrentItem(slug);
  }
  const paginas_carrera = state.source.get('/carrera').totalPages;
  for (let i = 0; i <= paginas_carrera; i++) {
    useEffect(() => {
      actions.source.fetch('/carrera/page/' + i);
    }, [])
  }
  const carreras = Object.values(state.source.carrera);
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={acf.ciudad}
        provincia={acf.provincia}
        description={acf.direccion}
        imageUrl={acf.foto.url}
        direccion={acf.direccion}
        telefono={acf.telefono}
        celular={acf.celular}
      />
      <BranchHeader>Oferta Académica</BranchHeader>
      <BranchParagraph>Disponible en {acf.ciudad === 'Campus Central' ? 'el' : 'la'} { acf.ciudad}</BranchParagraph>
      {acf.ofertas_academicas && <FilterButtons>
          {acf.ofertas_academicas.map((oferta, index) => {
            let { id, title, slug } = state.source[oferta.post_type][oferta.ID];
            if (index === 0) {
              id = 0;
              slug = 'all';
              return (
                <button
                  key={id}
                  onClick={ () => { filterButton(slug) } }
                  style = { currentItem === slug ? currentItemStyle : itemStyle }
                >
                  Todo
                </button>
              )
            }
            return(
              <button
                key={id}
                onClick={ () => { filterButton(slug) } }
                style = { currentItem === slug ? currentItemStyle : itemStyle }
              >
                {title.rendered}
              </button>
            )
          })}
        </FilterButtons>}
        <CareerCards carreras={carreras} />
        <AcademicUnits />
        <HomeNews />
    </>
  );
}

export default connect(BranchPage);
