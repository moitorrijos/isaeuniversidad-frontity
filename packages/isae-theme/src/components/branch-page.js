import React, { useState, useEffect } from 'react';
import { connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import FilterButtons from './filter-buttons';
import CareerCards from './career-cards';
import AcademicUnits from './academic-units';
import HomeNews from './home/home-news';
import ContactForm from './base/contact-form';

const BranchPage = ({ state, actions }) => {
  const branch = state.source.get(state.router.link);
  const { title, acf } = state.source[branch.type][branch.id];
  const [ currentItem, setCurrentItem ] = useState('all');
  const campus = state.router.link.split('/').filter(el => el)[1];
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
  for (let i = 1; i <= paginas_carrera; i++) {
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
        <CareerCards carreras={carreras} ciudad={acf.ciudad} campus={campus} slug={currentItem} />
        <AcademicUnits campus={campus} />
        <ContactForm branch={title.rendered} phone={acf.telefono} selected_branch={title.rendered} />
        <HomeNews />
    </>
  );
}

export default connect(BranchPage);
