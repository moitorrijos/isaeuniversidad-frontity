import React from 'react'
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import MainMessage from '../main-message';
import MainContainer from '../main-container';
import Grid from '../grid';
import createMarkup from '../../helpers/create-markup';
import ContactForm from '../base/contact-form';
import HomeNews from '../home/home-news';

const MisionVision = styled.div`
  padding: 8rem 0;
  background-color: ${colors.primaryBlueBright};

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const FunctionsSection = styled.div`
  padding: 6rem 0 8rem;
  background-image: linear-gradient(20deg, ${colors.lightGray}, ${colors.mediumGray});

  @media (max-width: 834px) {
    padding: 4rem 0 8rem;
  }
`;

const CenteredHeading = styled.h2`
  padding: 0 4rem;
  text-align: center;
  color: ${props => props.color};
`;

const Functions = styled.div`
  padding: 4rem;
  border-radius: 20px;
  background-color: ${colors.white};
  box-shadow: ${effects.boxShadow};

  @media (max-width: 834px) {
    padding: 2rem;
    padding-left: 1rem;
  }

  ul {
    padding: 0;
    padding-left: 33px;
    overflow: visible;
    position: relative;
    columns: 2;
    column-gap: 120px;

    @media (max-width: 834px) {
      columns: 1;
    }

    li {
      margin: 2rem 0;
      padding-left: 1rem;
      line-height: 1.3;

      &:first-of-type {
        margin-top: 0;
      }
    }
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

const LegalPage = ({ state }) => {
  const background = `${state.source.url}/wp-content/uploads/2021/03/background-isae-9.svg`;
  const legal = state.source.page[90553];
  const { acf, title } = legal;
  return (
    <>
      <MainMessage
        background={background}
        bgColor={colors.lightGray}
        imageUrl={acf.descripcion.imagen.url}
        title={title.rendered}
        description={acf.descripcion.mensaje}
      />
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
      <FunctionsSection>
        <CenteredHeading color={colors.primaryBlue}>{acf.funciones.titulo}</CenteredHeading>
        <MainContainer>
          <Functions
            dangerouslySetInnerHTML={createMarkup(acf.funciones.descripcion)}
          />
        </MainContainer>
      </FunctionsSection>
      <ContactForm />
      <HomeNews />
    </>
  )
}

export default connect(LegalPage)