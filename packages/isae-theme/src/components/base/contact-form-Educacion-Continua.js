import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import { useForm } from "react-hook-form";
import RightArrowCircle from '../icons/right-arrow-circle';

const FormContainer = styled.div`
  padding: 8rem 0;
  background-color: ${colors.blueBright600};

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
`;

const ContactForm = ({ state, branch, phone, selected_branch, selected_academic, email }) => {
  const academics = state.source.get('/ofertaacadmica').items;
  const branches = state.source.get('/sede').items;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  console.log(selected_academic);
  return (
    <FormContainer id="formulario-contacto">
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Solicitud de información!</h3>
            <p>Gracias por capacitarte con nosotros, <br></br>¡El futuro está en tus manos!</p>
            <h3>Contacto</h3>
            <p>
              {branch ? branch : ''}<br />
              {phone ? phone : '+507 278-1432 / 278-1444'}<br />
              {email ? email : 'asist.continua@isaeuniversidad.ac.pa'}
            </p>
          </FormInfo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input name="nombre" placeholder="Nombre" ref={register} />
            <input name="apellido" placeholder="Apellido" ref={register} />
            <input name="correo" placeholder="Correo" ref={register} />
            <input name="telefono" placeholder="Teléfono" ref={register} />
            <select name="oferta" ref={register} >
            <option selected disabled>
                Seleccione una opción
              </option>
              <option value="cursos">Cursos</option>
              <option value="talleres">Talleres</option>
              <option value="seminarios">Seminarios</option>
              <option value="diplomados">Diplomados</option>
              <option value="congresos">Congresos</option>
            </select>
            <select name="sede" ref={register} defaultValue={selected_branch}>
            <option selected disabled>
                Seleccione una sede
              </option>
              {branches.map(branch => {
                const { id, title } = state.source[branch.type][branch.id];
                return(
                  <option key={id} defaultValue={title.rendered}>{title.rendered}</option>
                )
              })}
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

export default connect(ContactForm);