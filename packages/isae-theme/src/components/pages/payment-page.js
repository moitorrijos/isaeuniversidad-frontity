import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import PrimaryButton from '../primary-button';
import MainContainer from '../main-container';
import Grid from '../grid';
import createMarkup from '../../helpers/create-markup';
import Image from '@frontity/components/image';

const PaymentSection = styled.div`
  background-image: url(${props => props.background ? props.background : ''});
  background-repeat: no-repeat;
  background-size: 50%;
  background-color: ${props => props.bgcolor ? props.bgcolor : colors.white};
  padding: 8rem 0;
`;

const PaymentImage = styled.figure`
  margin: 0;
  img {
    border-radius: 20px;
    width: 100%;
    height: 540px;
    object-fit: cover;
    box-shadow: ${effects.boxShadow};
  }
`;

const PaymentDescription = styled.div`
  align-self: center;
  padding: 4rem 0;
  max-width: 475px;
  color: ${colors.primaryText50};
  h1 {
    font-size: 42px;
    color: ${colors.primaryBlueBright};
  }
`;

const CenteredSection = styled.div`
  padding: 6rem;
  background-image: url(${props => props.background ? props.background : ''});
  background-size: cover;
  text-align: center;

  div {
    max-width: 615px;
    margin: 0 auto;
    color: ${colors.white};
    font-size: 1.4rem;

    span {
      display: block;
      font-size: 1.8rem;
      margin: 2rem 0;

      a {
        color: ${colors.white};
      }
    }
  }
`;

const PaymentPage = ({ state }) => {
  const { acf } = state.source.page[91204];
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-7.svg';
  return(
    <>
      <PaymentSection background={background} bgcolor={colors.white}>
        <MainContainer>
          <Grid columns="2" gap="100px">
            <PaymentImage>
              <Image src={acf.heroe.imagen.url} alt={acf.heroe.imagen.alt} />
            </PaymentImage>
            <PaymentDescription>
              <h1>{acf.heroe.titulo}</h1>
              <div dangerouslySetInnerHTML={createMarkup(acf.heroe.descripcion)} />
              <PrimaryButton link={acf.heroe.vinculo_pago}>Realizar Pago</PrimaryButton>
            </PaymentDescription>
          </Grid>
        </MainContainer>
      </PaymentSection>
      <PaymentSection bgcolor={colors.lightGray}>
        <MainContainer>
          <Grid columns="2" gap="100px">
            <PaymentDescription>
              <h2>{acf.instrucciones.titulo}</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.instrucciones.descripcion)} />
              <PrimaryButton link={acf.heroe.vinculo_pago}>Realizar Pago</PrimaryButton>
            </PaymentDescription>
            <PaymentImage>
              <Image src={acf.instrucciones.imagen.url} alt={acf.instrucciones.imagen.alt} />
            </PaymentImage>
          </Grid>
        </MainContainer>
      </PaymentSection>
      <CenteredSection background={acf.imagen_fondo.url}>
        <div dangerouslySetInnerHTML={createMarkup(acf.mas_info)} />
      </CenteredSection>
    </>
  );
}

export default connect(PaymentPage);