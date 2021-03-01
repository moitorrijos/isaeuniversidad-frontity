import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import Grid from '../grid';
import Image from "@frontity/components/image";
import createMarkup from '../../helpers/create-markup';

const Message = styled.div`
  padding: 8rem 0;
  background-color: ${props => props.bgColor};
  background-image: url(${props => props.background ? props.background : ''});
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
`;

const MessageImage = styled.figure`
  img {
    width: 100%;
    height: auto;
    min-height: 580px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
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
`;

const Mision = styled.div`
  background-color: ${colors.white};
  padding: 2rem 4rem 4rem;
  border-radius: 20px;

  h3 {
    color: ${colors.primaryBlueBright};
  }
`;

const Values = styled.div`
  padding: 8rem 0;

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

const AboutPage = ({ state }) => {
  const about = state.source.page[90517];
  const { acf } = about;
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  const values = Object.values(acf.nuestros_valores);
  return(
    <>
      <Message background={background} bgColor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="100px">
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
          <Grid columns="2" gap="100px">
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
          <Grid columns="2" gap="100px">
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
          <Grid columns="4" gap="40px">
            {values.map(value => (
              <Value key={value.icono.ID ? value.icono.ID : value.icono}>
                <Icon>
                  <Image src={value.icono.url ? value.icono.url : ''} />
                </Icon>
                <h3>{value.titulo}</h3>
                <p>{value.texto}</p>
              </Value>
            ))}
          </Grid>
        </MainContainer>
      </Values>
    </>
  );
}

export default connect(AboutPage);