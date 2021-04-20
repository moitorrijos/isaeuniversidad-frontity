import React from "react";
import { styled, connect } from "frontity";
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainContainer from "../main-container";
import createMarkup from '../../helpers/create-markup';
import Grid from "../grid";
import PrimaryButton from '../primary-button';
import CenteredSection from "../general/centered-section";

const HeroSection = styled.div`
  background-image: url(${props => props.background ? props.background : ''});
  background-repeat: no-repeat;
  background-size: 50%;
  padding: 8rem 0;
  
  @media (max-width: 834px) {
    padding: 4rem 0;
  }
`;

const HeroDescription = styled.div`
  align-self: center;
  padding: 6rem 0;
  max-width: 425px;
  color: ${colors.primaryText50};

  @media (max-width: 600px) {
    padding: 1rem 0;
    order: 2;
  }

  h1 {
    font-size: 42px;
    color: ${colors.primaryBlueBright};
  }
`;

const HeroImage = styled.figure`
  margin: 0;
  align-self: center;
  img, video {
    border-radius: 20px;
    width: 100%;
    height: 520px;
    object-fit: cover;
    object-position: left center;
    box-shadow: ${effects.boxShadow};

    @media (max-width: 600px) {
      height: 380px;
      order: 1
    }
  }
`;

const AWSPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-7.svg';
  const { acf, title } = pageData;
  const { imagen, correo, descripcion, video, boton_conoce_mas, mas_info, imagen_fondo } = acf;

  return (
    <>
      <HeroSection background={background}>
        <MainContainer>
          <Grid columns="2" gap="60px" med_gap="20px">
            <HeroImage>
              <video width="670" height="520" poster={imagen.url} autoPlay muted>
                <source src={video} type="video/mp4" />
              </video>
            </HeroImage>
            <HeroDescription>
              <h1>{title.rendered}</h1>
              <div dangerouslySetInnerHTML={createMarkup(descripcion)} />
              <PrimaryButton link={boton_conoce_mas.url}>{boton_conoce_mas.texto}</PrimaryButton>
            </HeroDescription>
          </Grid>
        </MainContainer>
      </HeroSection>
      <CenteredSection background={imagen_fondo.url}>
        <div>
          <p>{mas_info}</p>
          <a href={"mailto:"+correo}>{correo}</a>
        </div>
      </CenteredSection>
    </>
  );
}

export default connect(AWSPage);