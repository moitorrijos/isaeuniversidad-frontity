import React from 'react'
import { connect } from 'frontity';
import colors from '../../styles/colors';
import MainMessage from '../main-message';
import SecondaryMessage from '../secondary-message';
import ContactForm from '../base/contact-form-responsabilidad-social';


const ServicesPage = ({ state, page }) => {
  const services = state.source.page[page];
  const { acf } = services;
  console.log(acf);
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  return (
    <>
      {acf.seccion_1.imagen && <MainMessage
        background={background}
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_1.imagen.url}
        title={acf.seccion_1.titulo}
        description={acf.seccion_1.descripcion}
      />}
      {/* PARCHE:Corregir Error de despliege entre pagina de servicios y paginas de Responsabilida Social */}
      {acf.seccion_2.imagen && page !== 109148 && <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_2.imagen.url}
        title={acf.seccion_2.titulo}
        description={acf.seccion_2.descripcion}        
      />}
        
      {acf.seccion_2.imagen && page === 109148 && <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_2.imagen.url}
        title={acf.seccion_2.titulo}
        description={acf.seccion_2.descripcion}
        button_text ="Solicitar más información" 
        button_url ="/formulario-eco-isae/"
        />}  
      {acf.seccion_3.imagen && <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_3.imagen.url}
        title={acf.seccion_3.titulo}
        description={acf.seccion_3.descripcion}
      />}
      {acf.seccion_4.imagen && <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_4.imagen.url}
        title={acf.seccion_4.titulo}
        description={acf.seccion_4.descripcion}
        button_url={acf.seccion_4.url}
      />}
      {acf.seccion_5.imagen && <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_5.imagen.url}
        title={acf.seccion_5.titulo}
        description={acf.seccion_5.descripcion}
      />}
      {acf.seccion_6.imagen && <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_6.imagen.url}
        title={acf.seccion_6.titulo}
        description={acf.seccion_6.descripcion}
      />}
      {acf.seccion_7.imagen && <MainMessage
        bgColor={colors.lightGray}
        imageUrl={acf.seccion_7.imagen.url}
        title={acf.seccion_7.titulo}
        description={acf.seccion_7.descripcion}
      />}
      {acf.seccion_8.imagen && <SecondaryMessage
        bgColor={colors.white}
        imageUrl={acf.seccion_8.imagen.url}
        title={acf.seccion_8.titulo}
        description={acf.seccion_8.descripcion}
        button_url={acf.seccion_8.url}
      />}
      {page === 109148 && <ContactForm />}
    </>
  )
}

export default connect(ServicesPage);
