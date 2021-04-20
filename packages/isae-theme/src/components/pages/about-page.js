import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';
import Link from "@frontity/components/link";

const Message = styled.div`
  padding: 8rem 0;
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.background ? props.background : ''});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    padding: 2rem 0 1rem;
    background-position: left -20px;
  }
`;

const MessageImage = styled.figure`
  img {
    width: 100%;
    height: auto;
    min-height: 580px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

    @media (max-width: 600px) {
      min-height: auto;
      height: 420px;
      object-position: center 20%;
    }

    @media (max-width: 412px) {
      height: 380px;
    }
  }
`;

const MessageText = styled.div`
  align-self: center;

  h1, h2 {
    color: ${colors.primaryBlue};
  }
`;

const NombreRectora = styled.p`
  color: ${colors.primaryBlueBright};
`;

const MisionVision = styled.div`
  padding: 8rem 0;
  background-color: ${colors.primaryBlueBright};

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const Mision = styled.div`
  background-color: ${colors.white};
  padding: 2rem 4rem 4rem;
  border-radius: 20px;

  @media (max-width: 600px) {
    padding: 2rem;
  }

  h3 {
    color: ${colors.primaryBlueBright};
  }
`;

const Values = styled.div`
  padding: 8rem 0;

  @media (max-width: 600px) {
    padding: 2rem 0;
  }

  h2 {
    color: ${colors.primaryBlueBright};
    padding: 0 2rem 4rem;
    text-align: center;
  }
`;

const Value = styled.div`
  display: grid;
  grid-template-rows: 80px 100px 190px;
  gap: 20px;

  h3 {
    text-align: center;
    color: ${colors.primaryBlueBright};
  }
`;

const Icon = styled.figure`
  justify-self: center;
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;

const Reglamentos = styled.div`
  background-color: ${colors.primaryBlueBright};
  padding: 8rem 0 12rem;

  @media (max-width: 600px) {
    padding: 4rem 0;
  }

  h2 {
    color: ${colors.white};
    padding: 0;
    text-align: center;
    margin-bottom: 6rem;
  }
`;

const Reglamento = styled.div`
  padding: 40px 30px;
  border-radius: 20px;
  background-color: ${colors.white};
  color: ${colors.primaryText50};

  button {
    cursor: pointer;
    padding: 0;
    color: ${colors.primaryBlueBright};
    text-decoration: underline;
  }
`;

const ReglamentosCarreras = styled.div`
  padding: 6rem 0;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      padding: 1rem 0;
    }
  }
`;

const MoreInfo = styled.div`
  padding: 8rem 0;
  background-color: ${colors.primaryBlueBright};
  background-image: url(${props => props.background ? props.background : ''});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h2, h4 {
    margin: 1rem 0;
    text-align: center;
    line-height: 1.1;
    color: ${colors.white};
  }

  h4 {
    margin-bottom: 4rem;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 90px;
    height: 90px;
  }

  h4, a {
    color: ${colors.white};
  }

  h4 {
    margin: 2rem 0 0.5rem;
  }
`;

const AboutPage = ({ state }) => {
  const about = state.source.page[90517];
  const sourceUrl = state.source.url;
  const { acf } = about;
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  const valores = Object.values(acf.nuestros_valores);
  const iconos = Object.keys(acf.nuestros_valores);
  const reglamentos = Object.values(acf.reglamentos);
  const more_info = acf.mas_informacion_sobre_isae;
  const more_info_bg = sourceUrl + '/wp-content/uploads/2021/03/modelo-universidad.jpg';
  const reglamentos_de_carreras = acf.reglamentos.reglamento_de_carreras.carreras;
  const [ hidden, setHidden ] = useState(true);
  const verCarreras = () => {
    setHidden(!hidden);
  }
  return(
    <>
      <Message background={background} bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="100px" med_gap="20px" small_gap="20px">
            <MessageImage>
              <Image src={acf.mensaje_de_la_rectora.imagen.url} alt={acf.mensaje_de_la_rectora.alt} />
            </MessageImage>
            <MessageText>
              <h1>Mensaje de la Rectora</h1>
              <NombreRectora>Dra. Xiomara de Arrocha</NombreRectora>
              <div dangerouslySetInnerHTML={createMarkup(acf.mensaje_de_la_rectora.mensaje)} />
            </MessageText>
          </Grid>
        </MainContainer>
      </Message>
      <Message bgColor={colors.white}>
        <MainContainer>
          <Grid columns="2" gap="100px" med_gap="20px">
            <MessageText>
              <h2>Nuestra Historia</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.nuestra_historia.texto)} />
            </MessageText>
            <MessageImage>
              <Image src={acf.nuestra_historia.imagen.url} alt={acf.nuestra_historia.imagen.alt} />
            </MessageImage>
          </Grid>
        </MainContainer>
      </Message>
      <MisionVision>
        <MainContainer>
          <Grid columns="2" gap="40px">
            <Mision>
              <h3>Misión</h3>
              <div dangerouslySetInnerHTML={createMarkup(acf.mision_y_vision.mision)} />
            </Mision>
            <Mision>
              <h3>Visión</h3>
              <div dangerouslySetInnerHTML={createMarkup(acf.mision_y_vision.vision)} />
            </Mision>
          </Grid>
        </MainContainer>
      </MisionVision>
      <Values>
        <MainContainer>
          <h2>Nuestros Valores</h2>
          <Grid columns="4" med_columns="2" gap="40px">
            {valores.map((valor, index) => {
              return(
                <Value key={valor.icono.id ? valor.icono.ID : valor.icono}>
                  <Icon>
                    <Image src={valor.icono.url ? valor.icono.url : `${sourceUrl}/wp-content/uploads/2021/03/${iconos[index]}.svg`} />
                  </Icon>
                  <h3>{valor.titulo}</h3>
                  <p>{valor.texto}</p>
                </Value>
              ) 
            })}
          </Grid>
        </MainContainer>
      </Values>
      <Reglamentos>
        <h2>Reglamentos</h2>
        <MainContainer>
          <Grid columns="5" med_columns="2" gap="20px">
            {reglamentos.map(reglamento => (
              <Reglamento key={reglamento.titulo}>
                <h4>{reglamento.titulo}</h4>
                {reglamento.url && <Link link={reglamento.url}>Ver aquí</Link>}
                {reglamento.carreras && <button onClick={verCarreras}>Ver reglamentos</button>}
              </Reglamento>
            ))}
          </Grid>
        </MainContainer>
      </Reglamentos>
      <ReglamentosCarreras style={ hidden ? { display: 'none' } : { display: 'block' } }>
        <MainContainer>
          <ul>
            {Object.values(reglamentos_de_carreras).map(reglamento => (
              <li key={reglamento.url}>
                <Link link={reglamento.url}>{reglamento.carrera} &raquo;</Link>
              </li>
            ))}
          </ul>
        </MainContainer>
      </ReglamentosCarreras>
      <MoreInfo background={more_info_bg}>
        <h2>Más Información</h2>
        <h4>Sobre ISAE</h4>
        <MainContainer>
          <InnerContainer>
            {Object.values(more_info).map(info => (
              <Info key={info.icono.id}>
                <Image src={info.icono.url} />
                <h4>Modelo Educativo</h4>
                <Link link={info.url}>Descargar aquí</Link>
              </Info>
            ))}
          </InnerContainer>
        </MainContainer>
      </MoreInfo>
    </>
  );
}

export default connect(AboutPage);