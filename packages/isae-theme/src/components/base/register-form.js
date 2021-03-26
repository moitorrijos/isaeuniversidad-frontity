import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import { useForm } from "react-hook-form";

const FormContainer = styled.div`
  padding: 8rem 0;
  background-color: ${colors.blueBright600};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  align-items: center;
  gap: 100px;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }

`;

const FormInfo = styled.div`
  color: ${colors.white};
  font-size: 15px;

  h3 {
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 36px;

  @media (max-width: 412px) {
    grid-template-columns: 1fr;
  }

  input, select, button {
    flex-grow: 1;
    display: block;
    border: none;
    padding: 12px 1rem;
    border-radius: 8px;
    font-size: 1rem;
  }

  select {
    appearance: none;
    border: none;
    line-height: 1;
  }

  button {
    background-color: ${colors.primaryBlueBright};
    appearance: none;
    border: none;
    color: ${colors.white};
    display: flex;
    align-items: center;
    padding: 14px 2rem;
    width: 210px;
    text-align: center;

    svg {
      margin-left: 12px;
    }
  }
`;

const RegisterForm = ({ state, egresado }) => {
  const academics = state.source.get('/ofertaacadmica').items;
  const branches = state.source.get('/sede').items;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <FormContainer id="formulario-contacto">
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Soy {egresado ? 'Egresado' : 'Estudiante'} de ISAE UNIVERSIDAD</h3>
            <p>Si eres {egresado ? 'egresado' : 'estudiante'} de ISAE UNIVERSIDAD, completa el formulario y disfruta de actividades y beneficios exclusivos para ustedes.</p>
            Si eres {egresado ? 'egresado' : 'estudiante'} de ISAE UNIVERSIDAD, completa el formulario y disfruta de actividades y beneficios exclusivos para ustedes.
            <h3>Contáctenos</h3>
            <p>
              (+507) 2781432 Ext. 8094:<br />
              dir.extension@isaeuniversidad.ac.pa<br />
              Dirección de extensión y asuntos estudiantiles.
            </p>
          </FormInfo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input name="nombre" placeholder="Nombre" ref={register} />
            <input name="apellido" placeholder="Apellido" ref={register} />
            <input name="correo" placeholder="Correo Electrónico" ref={register} />
            <input name="telefono" placeholder="Teléfono" ref={register} />
            <input name="trabajo" placeholder="Lugar de Trabajo" ref={register} />
            <input name="cargo" placeholder="Cargo" ref={register} />
            <select name="oferta" ref={register}>
              {academics.map(academic => {
                  const { id, title } = state.source[academic.type][academic.id]
                  return(
                    <option key={id} value={title.rendered}>{title.rendered}</option>
                  )
                }
              )}
            </select>
            <select name="sede" ref={register}>
              {branches.map(branch => {
                const { id, title } = state.source[branch.type][branch.id];
                return(
                  <option key={id} value={title.rendered}>{title.rendered}</option>
                )
              })}
            </select>
            <button type="button">
              Registrarme Ahora
            </button>
          </Form>
        </FormGrid>
      </MainContainer>
    </FormContainer>
  )
}

export default connect(RegisterForm);