import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
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

const ContactForm = ({ state, branch, phone, selected_branch, selected_academic, EmailFormulario }) => {
  const academics = state.source.get('/ofertaacadmica').items;
  const branches = state.source.get('/sede').items;
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [selectedAcademic, setSelectedAcademic] = useState(selected_academic)
  const [selectedBranch, setSelectedBranch] = useState(selected_branch)
  const data = {
    nombre,
    apellido,
    correo,
    telefono,
    selectedAcademic,
    selectedBranch
  }
  const submitForm = () => console.log(data);

    
  return (
    <FormContainer id="formulario-contacto">
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Solicitud de información</h3>
            <p>
              Ponte en contacto con nosotros y obtén información sobre la oferta
              académica de tu interés.
            </p>
            <h3>Contacto</h3>
            <p>
              {branch ? branch : ""}
              <br />
              {phone ? phone : "+507 278-1432 / +507 278-1444"}
              <br />
              {EmailFormulario ? EmailFormulario : "isae@isaeuniversidad.ac.pa " }
              
            </p>
          </FormInfo>
          <Form onSubmit={submitForm}>
            <input name="nombre" placeholder="Nombre" defaultValue={nombre} onChange={(event) => {setNombre(event.target.value)}} />
            <input name="apellido" placeholder="Apellido" defaultValue={apellido} onChange={(event) => {setApellido(event.target.value)}} />
            <input name="correo" placeholder="Correo" defaultValue={correo} onChange={(event) => {setCorreo(event.target.value)}} />
            <input name="telefono" placeholder="Teléfono" defaultValue={telefono} onChange={(event) => {setTelefono(event.target.value)}} />
            
            <select
              name="oferta"
              defaultValue={selectedAcademic}
              onChange={(event) => {setSelectedAcademic(event.target.value)}}
            >
              {academics.map((academic) => {
                const { id, title } = state.source[academic.type][academic.id];
                return (
                  <option key={id} defaultValue={title.rendered}>
                    {title.rendered}
                  </option>
                );
              })}
            </select>
            <select name="sede" defaultValue={selectedBranch} onChange={(event) => setSelectedBranch(event.target.value)}>
              {branches.map((branch) => {
                const { id, title } = state.source[branch.type][branch.id];
                return (
                  <option key={id} defaultValue={title.rendered}>
                    {title.rendered}
                  </option>
                );
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
  );
}

export default connect(ContactForm);