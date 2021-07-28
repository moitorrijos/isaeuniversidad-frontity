import React from 'react'
import { connect } from 'frontity';
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import SecondaryMessage from '../secondary-message';
import PrimaryMessage from '../primary-message';

function VirtualPage({ state }) {
  const virtualPage = state.source.page[90519];
  const { acf } = virtualPage;
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  return (
    <>
      <MainMessage
        background={background}
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_1.imagen.url}
        title={acf.seccion_1.titulo}
        description={acf.seccion_1.descripcion}
        button_1_text={acf.seccion_1.buttons.boton_1.button_text_one}
        button_1_url={acf.seccion_1.buttons.boton_1.url}
        button_2_text={acf.seccion_1.buttons.boton_2.texto}
        button_2_url={acf.seccion_1.buttons.boton_2.url}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_2.imagen.url}
        title={acf.seccion_2.titulo}
        description={acf.seccion_2.descripcion}
        button_text={acf.seccion_2.boton.button_text}
        button_url={acf.seccion_2.boton.url}
      />
      <PrimaryMessage
        bgColor={colors.AzulFondo}
        imageUrl={acf.seccion_3.imagen.url}
        title={acf.seccion_3.titulo}
        description={acf.seccion_3.descripcion}
        button_text={acf.seccion_3.boton.button_text}
        button_url={acf.seccion_3.boton.url}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_4.imagen.url}
        title={acf.seccion_4.titulo}
        description={acf.seccion_4.descripcion}
        button_text={acf.seccion_4.boton.button_text}
        button_url={acf.seccion_4.boton.url}
      />
      <PrimaryMessage
        bgColor={colors.AzulFondo}
        imageUrl={acf.seccion_5.imagen.url}
        title={acf.seccion_5.titulo}
        description={acf.seccion_5.descripcion}
        // button_text={acf.seccion_5.boton.button_text}
        button_text='Ir a la sección de Pagos'
        button_url={acf.seccion_5.boton.url}
      />
      <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_6.imagen.url}
        title={acf.seccion_6.titulo}
        description={acf.seccion_6.descripcion}
        // button_text={acf.seccion_6.boton.button_text}
        button_text='Ir a la sección de Tutoriales'
        button_url={acf.seccion_6.boton.url}
      />      

    </>
  )
}

export default connect(VirtualPage)