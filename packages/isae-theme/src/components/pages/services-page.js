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
    </>
  )
}

export default connect(ServicesPage);