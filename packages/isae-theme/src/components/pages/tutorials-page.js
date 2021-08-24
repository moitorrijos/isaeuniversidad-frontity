import React, { useState } from 'react';
import { connect } from 'frontity';
import { styled } from "frontity";
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import FilterButtons from '../filter-buttons';
import MainContainer from '../main-container';
import Grid from '../grid';

const YoutubeVideoContainer = styled.div`
  padding: 2rem 0 8rem;
`;

const YoutubeVideo = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
  align-content: center;

  h3 {
    text-align: center;
  }
  .iframe-wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    border: 0;
  }
`;

const TutorialsPage = ({ state }) => {
  const page = state.source.page[110069];
  const { acf } = page;
  const [ currentItem, setCurrentItem ] = useState('seccion_2');
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
          onClick={() => { filterButton('seccion_2') }}
          style={ currentItem === 'seccion_2' ? currentItemStyle : itemStyle }
        >
          Estudiantes
        </button>
        <button
          onClick={() => { filterButton('seccion_3') }}
          style={ currentItem === 'seccion_3' ? currentItemStyle : itemStyle }
        >
          Profesores
        </button>
        <button
          onClick={() => { filterButton('seccion_4') }}
          style={ currentItem === 'seccion_4' ? currentItemStyle : itemStyle }
        >
          Microsoft Teams
        </button>
      </FilterButtons>
      <YoutubeVideoContainer>
        <MainContainer>
          <Grid columns="2" gap="100px" med_gap="20px" small_gap="20px">
            {Object.values(acf[currentItem]).map(item => (
              <YoutubeVideo>
                <h3>{item.text}</h3>
                <div className="iframe-wrapper">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtube_id}`}
                    title="Tutoriales ISAE Universidad"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </YoutubeVideo>
            )
            )}
          </Grid>
        </MainContainer>
      </YoutubeVideoContainer>
    </>
  )
}

export default connect(TutorialsPage);