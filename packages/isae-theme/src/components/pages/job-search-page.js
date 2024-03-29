//originalmente era la pagina de jobsearch, pero estaba referenciada con buzon de sugerencias. No se ha cambiado el nombre para evitar errores
import React from 'react';
import { connect } from 'frontity';
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import Form from "../../components/base/contact-form-buzon-sugerencias";

function JobSearchPage({ state, page }) {
  const jobSearch = state.source.page[page];
  const { acf } = jobSearch;
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  return (
    <>
      <MainMessage
        background={background}
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_1.imagen.url}
        title={acf.seccion_1.titulo}
        description={acf.seccion_1.descripcion}
      />
      <Form/>
    </>
  )
}

export default connect(JobSearchPage)

