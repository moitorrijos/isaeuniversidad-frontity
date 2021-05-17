import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import MainContainer from './main-container';
import Grid from './grid';
import Image from "@frontity/components/image";

const Units = styled.div`
  background-color: ${colors.lightGray};
  background-image: url(${props => props.background});
  background-size: 25%;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 6rem 0;

  h2, h4, p {
    color: ${colors.primaryBlue};
    text-align: center;

    @media (max-width: 600px)  {
      margin-bottom: 2rem;
    }
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 4rem;
  }
`;

const Unit = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;

  @media (max-width: 600px) {
    grid-template-columns: 120px 1fr;
    margin-bottom: 3rem;
  }
`;

const DepartmentImage = styled.figure`
  img {
    width: 170px;
    height: 180px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
    box-shadow: ${effects.darkerBoxShadow};

    @media (max-width: 600px) {
      width: 100%;
      height: 120px;
    }
  }

  @media (max-width: 600px) {
    align-self: start;
  }
`;

const DepartmentText = styled.div`
max-width: 360px;
  h4, p {
    text-align: left;
    margin-top: 0;
    color: ${colors.primaryText80};
  }
  h4 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 600px) {
    align-self: start;
  }
`;

const AcademicUnits = ({ campus, state, actions }) => {
  const paginas = state.source.get('/departamento').totalPages;
  const background = state.source.url+'/wp-content/uploads/2021/03/background-isae-11.svg';
  for (let i = 0; i <= paginas; i++) {
    useEffect(() => {
      actions.source.fetch('/departamento/page/' + i);
    }, [])
  }
  const departamentos = Object.values(state.source.departamento);
  return(
    <Units background={background}>
      <MainContainer>
        <h2>Unidades Académicas</h2>
        <p>Dentro de las sedes de Campus Central</p>
        <Grid columns="2" gap="40px">
          {[...departamentos].reverse().map(depto => {
            const {
              id,
              acf,
              title,
              featured_image_src,
            } = depto;
            const {
              correo_electronico,
              descripcion_corta,
              numero_de_telefono
            } = acf;
            if ( acf.sede.post_name && acf.sede.post_name === campus ) {
              return(
                <Unit key={id}>
                  <DepartmentImage>
                    { featured_image_src ?
                      <Image alt={title.rendered} src={featured_image_src} /> :
                      <Image
                        alt={title.rendered}
                        src={`${state.source.url}/wp-content/uploads/2021/02/humphrey-muleba-9MoQKZW0nGU-unsplash.jpg`} 
                        width={170}
                        height={180}
                      />
                    }
                  </DepartmentImage>
                  <DepartmentText>
                    <h4>{title.rendered}</h4>
                    <p>
                      { correo_electronico }<br />
                      { numero_de_telefono  }</p>
                    <p>
                      { descripcion_corta }
                    </p>
                  </DepartmentText>
                </Unit>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </MainContainer>
    </Units>
  );
}

export default connect(AcademicUnits);
