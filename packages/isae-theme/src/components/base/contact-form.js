import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import { useForm } from "react-hook-form";
import RightArrowCircle from '../icons/right-arrow-circle';

const FormContainer = styled.div`
  padding: 8rem 0;
  background-color: ${colors.primaryBlue};
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 100px;
`;

const FormInfo = styled.div`
  color: ${colors.white};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;

  input, select, button {
    padding: 8px 1rem;
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

const ContactForm = ({ state }) => {
  const academics = state.source.get('/ofertaacadmica').items;
  const branches = state.source.get('/sede').items;
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <FormContainer>
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Solicitud de información</h3>
            <p>Ponte en contacto con nosotros y obtén información sobre la oferta académica de tu interés.</p>
            <h3>Contacto</h3>
            <p>
              Campus Central:<br />
              (+507) 278-1432 / 278-1444<br />
              info@correo.com
            </p>
          </FormInfo>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstName" placeholder="Nombre" ref={register} />
            <input name="lastName" placeholder="Apellido" ref={register} />
            <input name="yourEmail" placeholder="Correo" ref={register} />
            <input name="phoneNumber" placeholder="Teléfono" ref={register} />
            <select name="academic" ref={register}>
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