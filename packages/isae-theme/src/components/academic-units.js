import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Grid from './grid';
import Image from "@frontity/components/image";

const Units = styled.div`
  background-color: ${colors.primaryBlueBright};
  padding: 6rem 0;

  h2, h4, p {
    color: ${colors.white};
    text-align: center;
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
  gap: 10px;
  align-items: center;
`;

const DepartmentImage = styled.figure`
  img {
    width: 170px;
    height: 180px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }
`;

const DepartmentText = styled.div`
  h4, p {
    text-align: left;
    margin-top: 0;
  }
  h4 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

const AcademicUnits = ({ state }) => {
  const departamentos = state.source.get('/departamento').items;
  const campus = state.router.link.split('/').filter(el => el)[1];
  return(
    <Units>
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
              correo_electronico,
              descripcion_corta,
              numero_de_telefono
            } = state.source.departamento[depto.id];
            if ( acf.sede.post_name && acf.sede.post_name === campus ) {
              return(
                <Unit key={id}>
                  <DepartmentImage>
                    { featured_image_src ?
                      <Image alt={title.rendered} src={featured_image_src} /> :
                      <Image
                        alt={title.rendered}
                        src={`${state.source.url}/wp-content/uploads/2021/02/humphrey-muleba-9MoQKZW0nGU-unsplash.jpg`} 
                      />
                    }
                  </DepartmentImage>
                  <DepartmentText>
                    <h4>{title.rendered}</h4>
                    <p>
                      { correo_electronico ? correo_electronico : 'departamento@isae.ac.pa' }<br />
                      { numero_de_telefono ? numero_de_telefono : '+507 333 4456' }</p>
                    <p>
                      { descripcion_corta ?
                        descripcion_corta :
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
                      }
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
