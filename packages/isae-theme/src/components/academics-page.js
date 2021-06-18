import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import PostHero from './post-hero';
import ContactForm from './base/contact-form';
import MainContainer from './main-container';
import Grid from './grid';
import SingleCard from './base/single-card';
import createMarkup from '../helpers/create-markup';
import Image from "@frontity/components/image";

const AcademicHeading = styled.p`
  max-width: 420px;
  margin: 6rem auto 2rem;
  color: ${colors.primaryBlue};
  font-size: 2rem;
  line-height: 1.1;
  text-align: center;
  font-weight: 500;
  margin-bottom: 6rem;

  @media (max-width: 600px) {
    margin-bottom: 4rem;
  }
`;

const FilterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 4rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;

  a, button {
    font-size: 1rem;
    appearance: none;
    padding: 16px 40px;
    border-radius: 8px;
    border: 1px solid ${colors.secondaryBlue};
    outline: none;
    color: ${colors.secondaryBlue};
    background-color: ${colors.white};
    text-decoration: none;
    transition: all 0.25s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }
  }
`;

const AvailableCareers = styled.div`
  padding-bottom: 4rem;

  @media (max-width: 600px) {
    padding: 4rem 0;
  }
`;

const PageContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.85;
`;

const ContactInformation = styled.div`
  background-color: ${colors.lightGray};
  background-size: 25%;
  background-position: left top;
  background-repeat: no-repeat;
  padding: 6rem 0;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 4rem;
  }
`;

const ContactInformationTitle = styled.h2`
  color: ${colors.darkGray};
  text-align: center;

  @media (max-width: 600px)  {
    margin-bottom: 2rem;
  }
`;

const ContactInformationDescription = styled.p`
  color: ${colors.darkGray};
  text-align: center;

  @media (max-width: 600px)  {
    margin-bottom: 2rem;
  }
`;

const Contact = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;
  
  @media (max-width: 600px) {
    grid-template-columns: 120px 1fr;
    margin-bottom: 3rem;
  }
`;

const ContactImage = styled.div`
  img {
    width: 120px;
    height: 120px;
    border-radius: 2rem;
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

const ContactDescription = styled.div`
  max-width: 360px;
  h4, p {
    text-align: left;
    margin-top: 0;
    color: ${colors.primaryText80};
  }
  h4 {
    margin-bottom: 1rem;
  }
  h5 {
    margin: 0.25rem 0;
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

const AcademicsPage = ({ state, actions }) => {
  const academics = state.source.get(state.router.link);
  const academic_slug = academics.link.split('/').filter(el => el)[1];
  const { acf, title, featured_image_src } = state.source[academics.type][academics.id];
  const paginas_carrera = state.source.get('/carrera').totalPages;
  for (let i = 1; i <= paginas_carrera; i++) {
    useEffect(() => {
      actions.source.fetch('/carrera/page/' + i);
    }, [])
  }
  const carreras = Object.values(state.source.carrera);
  const { descripcion } = acf;
  const [ currentItem, setCurrentItem ] = useState('campus-central');
  function filterButton(slug) {
    setCurrentItem(slug);
  }
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={title.rendered}
        description={descripcion}
        imageUrl={featured_image_src}
      />
      {acf.sedes && <>
        <AcademicHeading>Filtrar {title.rendered} según Sede</AcademicHeading>
        <FilterContainer>
          {acf.sedes.map(branch => {
            const { ID, slug, acf } = branch.ID ? state.source.sede[branch.ID] : state.source.sede[branch.id];
            return(
              <button
                key={ID}
                onClick={ () => { filterButton(slug) }}
                style={ currentItem === slug ? {
                  backgroundColor: colors.secondaryBlue,
                  color: colors.white
                } : {
                  backgroundColor: colors.white,
                  color: colors.secondaryBlue
                } }
              >
                  {acf.ciudad}
              </button>
            )
          })}
        </FilterContainer>
      </>}
      {carreras && academic_slug !== 'educacion-continua' && <AvailableCareers>
        <AcademicHeading>Carreras Disponibles</AcademicHeading>
        <MainContainer>
          <Grid columns="4" small_columns="2" gap="20px">
            {carreras.map(carrera => {
              const { id, link, featured_image_src, title, acf } = carrera;
              const sedes = acf.sedes ? acf.sedes.map(sede => sede.post_name) : [];
              const oferta_academica = acf.oferta_academica ? acf.oferta_academica.post_name : '';
              if (
                (oferta_academica ===  academic_slug) &&
                (sedes.includes(currentItem))) {
                return(
                  <SingleCard
                    key={id}
                    link={link}
                    image={featured_image_src}
                    title={title}
                  />
                )
              } else {
                return null;
              }
            })}
          </Grid>
        </MainContainer>
      </AvailableCareers>}
      {acf.contenido && <MainContainer>
        <PageContent dangerouslySetInnerHTML={createMarkup(acf.contenido)} />
      </MainContainer>}
      { acf.contacto && <ContactInformation>
        <MainContainer>
        <ContactInformationTitle>Información de Contacto:</ContactInformationTitle>
        <ContactInformationDescription>Solicita información sobre nuestra variada oferta de talleres, cursos, seminarios y diplomados.</ContactInformationDescription>
          <Grid columns="2" gap="40px">
            {Object.values(acf.contacto).map( contacto => {
              return(
                <Contact key={contacto.icono.id}>
                  <ContactImage>
                    <Image alt={contacto.icono.alt} src={contacto.icono.url} width={80} />
                  </ContactImage>
                  <ContactDescription>
                    <h4>{contacto.sede}</h4>
                    <h5>{ contacto.nombre }</h5>
                    <p>
                      <a href={`mailto:${contacto.correo}`}>{contacto.correo}</a><br />
                      { contacto.telefono_1 }<br />
                      { contacto.telefono_2 }
                    </p>
                  </ContactDescription>
                </Contact>
              )
            })}
          </Grid>  
        </MainContainer>  
      </ContactInformation>}
      <ContactForm />
    </>
  );

}

export default connect(AcademicsPage);