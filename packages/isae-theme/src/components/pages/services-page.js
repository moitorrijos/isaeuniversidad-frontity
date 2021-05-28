import React from 'react'
import { connect } from 'frontity';
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import SecondaryMessage from '../secondary-message';

const ServicesPage = ({ state }) => {
  const services = state.source.page[109632];
  const { acf } = services;
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
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_2.imagen.url}
        title={acf.seccion_2.titulo}
        description={acf.seccion_2.descripcion}
      />
      <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_3.imagen.url}
        title={acf.seccion_3.titulo}
        description={acf.seccion_3.descripcion}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_4.imagen.url}
        title={acf.seccion_4.titulo}
        description={acf.seccion_4.descripcion}
      />
      <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_5.imagen.url}
        title={acf.seccion_5.titulo}
        description={acf.seccion_5.descripcion}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_6.imagen.url}
        title={acf.seccion_6.titulo}
        description={acf.seccion_6.descripcion}
      />
      <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_7.imagen.url}
        title={acf.seccion_7.titulo}
        description={acf.seccion_7.descripcion}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_8.imagen.url}
        title={acf.seccion_8.titulo}
        description={acf.seccion_8.descripcion}
        button_url={acf.seccion_8.url}
      />
    </>
  )
}

export default connect(ServicesPage);