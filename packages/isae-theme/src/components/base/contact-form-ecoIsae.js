import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import { useForm } from "react-hook-form";
import RightArrowCircle from '../icons/right-arrow-circle';

const FormContainer = styled.div`
  padding: 8rem 0;
  background-color: ${colors.VerdeEco};  
  background-image: url("https://isae.prontoaqui.com/wp-content/uploads/2021/07/eco-isae3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 600px) {
    padding: 6rem 0;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  align-items: center;
  gap: 100px;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
`;

const FormInfo = styled.div`
  color: ${colors.white};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;

  @media (max-width: 434px) {
    grid-template-columns: 1fr;
  }

  input, select, button {
    padding: 10px 1rem;
    border-radius: 8px;
    font-size: 1rem;
  }

  select {
    appearance: none;
    border: none;
  }

  button {
    background-color: ${colors.primaryBlueBright};
    appearance: none;
    border: none;
    color: ${colors.white};
    display: flex;
    align-items: center;
    padding: 8px 2rem;
    width: 160px;
    text-align: center;

    svg {
      margin-left: 12px;
    }
  }  
}
`;



const CfecoIsae = ({ state, branch, phone }) => {
  const academics = state.source.get('/ofertaacadmica').items;
  const branches = state.source.get('/sede').items;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormContainer id="formulario-contacto" className="Fondo-Formulario">
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Solicitud de información Eco ISAE</h3>
            <p>Participa de nuestras actividades, inscríbete en nuestro formulario: </p>
            <h3>Contacto</h3>
            <p>
              {branch ? branch : 'Campus Central:'}<br />
              {phone ? phone : '(+507) 278-1432 / 278-1444'}<br />
              info@isaeuniversidad.ac.pa
            </p>
          </FormInfo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input name="nombre_completo" placeholder="Nombre Completo" ref={register} />
            <input name="direccion" placeholder="Dirección" ref={register} />
            <input name="telefono" placeholder="Teléfono" ref={register} />
            <input name="correo" placeholder="Correo" ref={register} />
            <select name="sede" ref={register}>
              {branches.map(branch => {
                const { id, title } = state.source[branch.type][branch.id];
                return(
                  <option key={id} value={title.rendered}>{title.rendered}</option>
                )
              })}
            </select>
            <select name="oferta" ref={register}>
              {academics.map(academic => {
                  const { id, title } = state.source[academic.type][academic.id]
                  return(
                    <option key={id} value={title.rendered}>{title.rendered}</option>
                  )
                }
              )}
            </select>            
            <button type="button">
              Enviar
              <RightArrowCircle color={colors.white} />
            </button>
          </Form>
        </FormGrid>
      </MainContainer>
    </FormContainer>
  )
}

export default connect(CfecoIsae);