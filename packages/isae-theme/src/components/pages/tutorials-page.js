import React, { useState } from 'react';
import { connect } from 'frontity';
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import FilterButtons from '../filter-buttons';
import CareerCards from '../career-cards';

const TutorialsPage = ({ state }) => {
  const page = state.source.page[110069];
  const { acf } = page;
  const [ currentItem, setCurrentItem ] = useState('estudiantes');
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
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
  return(
    <>
      <MainMessage
        background={background}
        title={acf.seccion_Main.titulo}
        imageUrl={acf.seccion_Main.imagen.url}
        description={acf.seccion_Main.descripcion}
      />
      <FilterButtons>
        <button
          onClick={() => { filterButton('estudiantes') }}
          style={ currentItem === 'estudiantes' ? currentItemStyle : itemStyle }
        >
          Estudiantes
        </button>
        <button
          onClick={() => { filterButton('profesores') }}
          style={ currentItem === 'profesores' ? currentItemStyle : itemStyle }
        >
          Profesores
        </button>
        <button
          onClick={() => { filterButton('teams') }}
          style={ currentItem === 'teams' ? currentItemStyle : itemStyle }
        >
          Microsoft Teams
        </button>
      </FilterButtons>
    </>
  )
}

export default connect(TutorialsPage);