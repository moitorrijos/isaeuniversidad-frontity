import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';

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
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [trabajo, setTrabajo] = useState("")
  const [cargo, setCargo] = useState("")
  const [oferta, setOferta] = useState("")
  const [sede, setSede] = useState("")
  const submitForm = data => console.log(data);

  return(
    <FormContainer id="formulario-contacto">
      <MainContainer>
        <FormGrid>
          <FormInfo>
            <h3>Soy {egresado ? 'Egresado' : 'Estudiante'}</h3>
            <p>Si eres {egresado ? 'egresado' : 'estudiante'} de ISAE Universidad, completa este formulario. Participa de actividades y beneficios que tenemos diseñados exclusivamente para ti.</p>
            {/* Si eres {egresado ? 'egresado' : 'estudiante'} de ISAE UNIVERSIDAD, completa el formulario y disfruta de actividades y beneficios exclusivos para ustedes. */}
            <h3>Contáctenos</h3>
            <p>
              Dirección de Extensión y Asuntos Estudiantiles <br />
              +507 2781432 Ext. 8094<br />
              dir.extension@isaeuniversidad.ac.pa              
            </p>
          </FormInfo>
          <Form onSubmit={submitForm}>
            <input name="nombre" placeholder="Nombre" defaultValue={nombre} onChange={event => setNombre(event.target.value)} />
            <input name="apellido" placeholder="Apellido" defaultValue={apellido} onChange={event => setApellido(event.target.value)} />
            <input name="correo" placeholder="Correo Electrónico" defaultValue={correo} onChange={event => setCorreo(event.target.value)} />
            <input name="telefono" placeholder="Teléfono" defaultValue={telefono} onChange={event => setTelefono(event.target.value)} />
            <input name="trabajo" placeholder="Lugar de Trabajo" defaultValue={trabajo} onChange={event => setTrabajo(event.target.value)} />
            <input name="cargo" placeholder="Cargo" defaultValue={cargo} onChange={event => setCargo(event.target.value)} />
            <select name="oferta" defaultValue={oferta} onChange={event => setOferta(event.target.value)}>
              {academics.map(academic => {
                  const { id, title } = state.source[academic.type][academic.id]
                  return(
                    <option key={id} value={title.rendered}>{title.rendered}</option>
                  )
                }
              )}
            </select>
            <select name="sede" defaultValue={sede} onChange={event => setSede(event.target.value)}>
              {branches.map(branch => {
                const { id, title } = state.source[branch.type][branch.id];
                return(
                  <option key={id} value={title.rendered}>{title.rendered}</option>
                )
              })}
            </select>
            <button type="submit">
              Registrarme Ahora
            </button>
          </Form>
        </FormGrid>
      </MainContainer>
    </FormContainer>
  )
}

export default connect(RegisterForm);