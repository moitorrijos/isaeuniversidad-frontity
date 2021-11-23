import React from "react";
import { styled, connect } from "frontity";
import colors from "../../styles/colors";
import MainContainer from "../main-container";
import { useForm } from "react-hook-form";
import RightArrowCircle from "../icons/right-arrow-circle";

const FormContainer = styled.div`
  padding: 8rem 0;
  background-color: ${colors.blueBright600};

  @media (max-width: 600px) {
    padding: 6rem 0;
  }
`;

const FormGrid = styled.div`
  // display: grid;
  // grid-template-columns: 0px 1fr;
  // align-items: center;
  // gap: 0px;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
`;

const FormInfo = styled.div`
  color: ${colors.white};
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  gap: 5px;

  @media (max-width: 434px) {
    grid-template-columns: 1fr;
  }

  input,
  select,
  button {
    padding: 10px 1rem;
    border-radius: 8px;
    font-size: 1rem;
  }

  select {
    appearance: none;
    border: none;
  }
  label {
    color: white;
    text-align: right;
  }
  h4, p {
    color: white;
  }
  hr {
    visibility: hidden;
  }

  button {
    background-color: ${colors.primaryBlueBright};
    appearance: none;
    border: none;
    color: ${colors.white};
    display: flex;
    align-items: center;
    padding: 8px 2rem;
    width: 100%;
    text-align: center;

    svg {
      margin-left: 12px;
    }
  }
`;

const ContactForm = ({
  state,
  branch,
  phone,
  selected_branch,
  selected_academic,
}) => {
  const academics = state.source.get("/ofertaacadmica").items;
  const branches = state.source.get("/sede").items;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer id="formulario-contacto">
      <MainContainer>
        <FormGrid>          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <hr />
            <h4>Datos Generales</h4>
            <label htmlFor="nombre">Nombre: </label>
            <input name="nombre" ref={register} />
            <label htmlFor="nombre">Apellido: </label>
            <input name="apellido" ref={register} />
            <label htmlFor="nombre">Segundo Apellido: </label>
            <input name="SegundoApellido" ref={register} />
            <label htmlFor="sexo">Sexo: </label>
            <select id="sexo" name="sexo">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
            <label for="nacimiento">Fecha de Nacimiento :</label>
            <input
              type="date"
              id="nacimiento"
              name="nacimiento"
              value="1950-01-01"
              min="1950-01-01"
              max="2021-12-31"
            />
            <label for="nacionalidad">Nacionalidad :</label>
            <input name="nacionalidad" ref={register} />
            <label for="tipodocumento">Tipo de Documento :</label>
            <select id="identidad-tipo" name="identidad">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="masculino">Cédula</option>
              <option value="femenino">Pasaporte</option>
            </select>
            <label for="documento">Número de Documento :</label>
            <input name="DocumentoIdentidad" ref={register} />
            <label for="Estado Civil">Estado Civil :</label>
            <input name="estadoCivil" ref={register} />
            <label for="celular">Celular :</label>
            <input name="celular" ref={register} />
            <label for="correo">Correo :</label>
            <input name="correo"  ref={register} />
            <label for="telefono">Teléfono :</label>
            <input name="telefono"  ref={register} />
            <hr />
            <h4>Residencia</h4>
            <label for="direccionResidencia">Dirección Residencial :</label>
            <input name="direccion" ref={register} />
            <label for="provincia">Provincia :</label>
            <input name="telefono" ref={register} />
            <label for="telefonoresidencia">Teléfono Residencial :</label>
            <input name="telresidencial" ref={register} />
            <label for="empleo">Último Empleo - Actual :</label>
            <input name="telresidencial" ref={register} />
            <label for="cargo">Cargo :</label>
            <input name="cargo" ref={register} />
            <label for="descripcionempleo">
              Descripción del último empleo :
            </label>
            <textarea
              name="descripcionultimoempleo"
              id=""
              cols="30"
              rows="10"
              ref={register}
              ></textarea>

            <hr />            
            <h4>Estudios</h4>
            <label for="estudio">Último nivel de estudio obtenido :</label>
            <select id="estudio" name="estudio">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="maestria">Maestria</option>
              <option value="doctorado">Doctorado</option>
              <option value="licenciatura">Licenciatura</option>
              <option value="incompleto">Incompleto</option>
            </select>
            <label for="centro-de-estudio">Centro de estudio :</label>
            <input name="centro-de-estudio" ref={register} />
            <label for="tituloObtenido">Último título obtenido :</label>
            <input name="tituloObtenido" ref={register} />
            <hr />            
            <h4>Idioma</h4>
            <label for="idioma_uno">Idioma :</label>
            <input name="idioma_dos" ref={register} />
            <label for="nivel">Nivel :</label>
            <select id="nivel_dos" name="nivel_dos">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>                           
            </select>
            <label for="idioma_uno">Idioma :</label>
            <input name="idioma_uno" ref={register} />
            <label for="nivel">Nivel :</label>
            <select id="nivel_uno" name="nivel_uno">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>                         
            </select>
            <hr />            
            <h4>Conocimientos Técnicos</h4>
            <label for="conocimientos_tecnicos">Nombre :</label>
            <input name="conocimientos_tecnicos" ref={register} />
            <label for="nivel">Nivel :</label>
            <select id="nivel_dos" name="nivel_dos">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="basico">Básico</option>
              <option value="intermedio">Intermedio</option>
              <option value="avanzado">Avanzado</option>              
            </select>
            <label for="conocimientos_tecnicos_observaciones">
              Observaciones :
            </label>
            <textarea
              name="conocimientos_tecnicos_observaciones"
              id=""
              cols="30"
              rows="10"
              ref={register}
              ></textarea>
              <hr />            
            <h4>Solicitud de Empleo</h4><hr />     
            <p>Esta empresa garantiza que la selección se hará en base a las características que se ajusten más a los requisitos establecidos en la descripción del puesto vacante. Con ese propósito le agradecemos nos proporcione la información más exacta posible. Los datos serán tratados de manera confidencial.</p><hr />     
            <select id="empleo_solicitud" name="empleo_solicitud">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="Ocupado">Ocupado actualmente</option>
              <option value="Disponible">Disponibilidad inmediata</option>                        
            </select>
            <label for="area-interes">Indicar su área de interes en nuestra organización :</label>
            <select id="area-interes" name="area-interes">
              <option selected disabled>
                Seleccione uno
              </option>
              <option value="administrador">Administracion</option>
              <option value="docente">Educador</option>                        
              <option value="ventas">Ventas</option> 
              <option value="ayudante">Ayudante General</option>                                      
            </select>
            <label for="Salario">Salario :</label>
            <input name="salario" ref={register} />
            <hr /> 
            <hr /> 
            <hr /> 
            <button type="button">
              Aplicar
              <RightArrowCircle color={colors.white} />
            </button>
          </Form>
        </FormGrid>
      </MainContainer>
    </FormContainer>
  );
};

export default connect(ContactForm);
