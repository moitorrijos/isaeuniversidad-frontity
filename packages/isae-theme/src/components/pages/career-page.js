import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import Link from "@frontity/components/link";
import MainContainer from '../main-container';
import Grid from '../grid';
import HoursIcon from '../icons/hours-icon';
import PracticeHoursIcon from '../icons/practice-hours-icon';
import CreditsIcon from '../icons/credits-icon';
import FolderIcon from '../icons/folder-icon';
import BranchFilterButtons from '../branch-filter-buttons';
import ResolutionIcon from '../icons/resolution-icon';
import ScheduleIcon from '../icons/schedule-icon';
import BookIcon from '../icons/book-icon';
import createMarkup from '../../helpers/create-markup';
import Image from "@frontity/components/image";
import SingleCard from '../base/single-card';
import ContactForm from '../base/contact-form';

const CareerPage = ({ state }) => {
  const career = state.source.get(state.router.link);
  const { 
    title,
    acf,
    featured_image_src
  } = state.source[career.type][career.id];
  const careers = state.source.get('/carrera').items;
  const [ hidden1, setHidden1 ] = useState(true);
  const [ hidden2, setHidden2 ] = useState(false);
  function toggleTab1() {
    setHidden1(!hidden1);
  }
  function toggleTab2() {
    setHidden2(!hidden2);
  }
  return(
    <>
      <BigHero background={featured_image_src}>
        <h1>{title.rendered}</h1>
        <h3>{acf.descripcion}</h3>
        <LinkButton link={acf.boton_plan_de_estudio} >Ver Plan de Estudio</LinkButton>
      </BigHero>
      <DescriptionCards backgroundColor={colors.lightGray}>
        <MainContainer style={{overflow: "visible"}}>
          <Grid columns="4" gap="20px">
            <HoursCard>
              <HoursIcon />
              <h2>{acf.total_horas_academicas}</h2>
              <p>Total de Horas Teóricas</p>
            </HoursCard>
            <HoursCard>
              <PracticeHoursIcon />
              <h2>{acf.total_horas_practicas}</h2>
              <p>Total de Horas Prácticas</p>
            </HoursCard>
            <HoursCard>
              <CreditsIcon />
              <h2>{acf.total_creditos}</h2>
              <p>Total de Créditos</p>
            </HoursCard>
            <HoursCard>
              <FolderIcon />
              <h2>{acf.total_de_asignaturas}</h2>
              <p>Total de Asignaturas</p>
            </HoursCard>
          </Grid>
        </MainContainer>
      </DescriptionCards>
      <FilterHeading>Disponible en Sedes</FilterHeading>
      {acf.sedes && <BranchFilterButtons branches={acf.sedes} />}
      <DescriptionCards backgroundColor={colors.white}>
        <MainContainer>
          <Grid columns="3" gap="20px">
            <DescriptionCard>
              <ResolutionIcon />
              <h3>Resolución</h3>
              <div dangerouslySetInnerHTML={createMarkup(acf.resolucion)} />
            </DescriptionCard>
            <DescriptionCard>
              <ScheduleIcon />
              <h3>Horario</h3>
              <div dangerouslySetInnerHTML={createMarkup(acf.horario)} />
            </DescriptionCard>
            <DescriptionCard>
              <BookIcon />
              <h3>Modalidad</h3>
              <div dangerouslySetInnerHTML={createMarkup(acf.modalidad)} />
            </DescriptionCard>
          </Grid>
        </MainContainer>
      </DescriptionCards>
      <RequirementsSection>
        <MainContainer>
          <FlexboxContainer>
            <GeneralRequirementes>
              <h2>Requisitos</h2>
              <div dangerouslySetInnerHTML={createMarkup(acf.requisitos_generales)} />
            </GeneralRequirementes>
            <RequirementTabs>
              <Requirements>
                <RequirementsHeading onClick={toggleTab1}>
                  Requisitos para estudiantes nacionales
                  <span>{ hidden1 ? "-" : "+"}</span>
                </RequirementsHeading>
                {hidden1 && <RequirementsInfo
                  dangerouslySetInnerHTML={createMarkup(acf.requisitos_nacionales)} 
                />}
              </Requirements>
              <Requirements>
              <RequirementsHeading onClick={toggleTab2}>
                  Requisitos para estudiantes extranjeros
                  <span>{ hidden2 ? "-" : "+"}</span>
                </RequirementsHeading>
                {hidden2 && <RequirementsInfo
                  dangerouslySetInnerHTML={createMarkup(acf.requisitos_extranjeros)} 
                />}
              </Requirements>
            </RequirementTabs>
          </FlexboxContainer>
        </MainContainer>
      </RequirementsSection>
      <ProfileSection>
        <MainContainer>
          <ProfileFlexboxContainer>
            <ProfileSectionDescription>
              <h2>Perfil del Egresado</h2>
              <h3>Saber Hacer</h3>
              <div
                dangerouslySetInnerHTML={createMarkup(acf.saber_hacer.saber_hacer_descripcion)}
              />
            </ProfileSectionDescription>
            <ProfileSectionImages>
              <ProfileImages>
                {acf.saber_hacer.saber_hacer_imagen2 && <Image
                  src={acf.saber_hacer.saber_hacer_imagen1.url}
                  alt={acf.saber_hacer.saber_hacer_descripcion} 
                />}
                {acf.saber_hacer.saber_hacer_imagen2 && <Image
                  src={acf.saber_hacer.saber_hacer_imagen2.url}
                  alt={acf.saber_hacer.saber_hacer_descripcion} 
                />}
              </ProfileImages>
            </ProfileSectionImages>
          </ProfileFlexboxContainer>
          <ProfileFlexboxContainer>
            <ProfileSectionImages>
              <ProfileImages>
                {acf.saber_ser.saber_ser_imagen2 && <Image
                  src={acf.saber_ser.saber_ser_imagen1.url}
                  alt={acf.saber_ser.saber_ser_descripcion} 
                />}
                {acf.saber_ser.saber_ser_imagen2 && <Image
                  src={acf.saber_ser.saber_ser_imagen2.url}
                  alt={acf.saber_ser.saber_ser_descripcion} 
                />}
              </ProfileImages>
            </ProfileSectionImages>
            <ProfileSectionDescription>
              <h3>Saber Ser</h3>
              <div
                dangerouslySetInnerHTML={createMarkup(acf.saber_ser.saber_ser_descripcion)}
              />
            </ProfileSectionDescription>
          </ProfileFlexboxContainer>
          <ProfileFlexboxContainer>
            <ProfileSectionDescription>
              <h3>Saber Convivir</h3>
              <div
                dangerouslySetInnerHTML={createMarkup(acf.saber_convivir.saber_convivir_descripcion)}
              />
            </ProfileSectionDescription>
            <ProfileSectionImages>
              <ProfileImages>
                {acf.saber_convivir.saber_convivir_imagen2 && <Image
                  src={acf.saber_convivir.saber_convivir_imagen1.url}
                  alt={acf.saber_convivir.saber_convivir_descripcion} 
                />}
                {acf.saber_convivir.saber_convivir_imagen2 && <Image
                  src={acf.saber_convivir.saber_convivir_imagen2.url}
                  alt={acf.saber_convivir.saber_convivir_descripcion} 
                />}
              </ProfileImages>
            </ProfileSectionImages>
          </ProfileFlexboxContainer>
          <ProfileFlexboxContainer>
            <ProfileSectionImages>
              <ProfileImages>
                {acf.saber_conocer.saber_conocer_imagen2 && <Image
                  src={acf.saber_conocer.saber_conocer_imagen1.url}
                  alt={acf.saber_conocer.saber_conocer_descripcion} 
                />}
                {acf.saber_conocer.saber_conocer_imagen2 && <Image
                  src={acf.saber_conocer.saber_conocer_imagen2.url}
                  alt={acf.saber_conocer.saber_conocer_descripcion} 
                />}
              </ProfileImages> 
            </ProfileSectionImages>
            <ProfileSectionDescription>
              <h3>Saber Conocer</h3>
              <div
                dangerouslySetInnerHTML={createMarkup(acf.saber_conocer.saber_conocer_descripcion)}
              />
            </ProfileSectionDescription>
          </ProfileFlexboxContainer>
        </MainContainer>
      </ProfileSection>
      <OtherPrograms>
        <h2>Otros Programas</h2>
        <MainContainer>
          <Grid columns="3" gap="30px">
            {[...careers].reverse().map(career => {
              const available_career = state.source[career.type][career.id];
              const { id, link, title, featured_image_src } = available_career;
              return(
                <SingleCard key={id} link={link} image={featured_image_src} title={title} />
              );
            })}
          </Grid>
        </MainContainer>
      </OtherPrograms>
      <ContactForm />
    </>
  );
}

export default connect(CareerPage)


const BigHero = styled.div`
  padding: 16rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkGray};
  background-image: url(${props => props.background ? props.background : ''});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  h1, h3, a {
    text-align: center;
    color: ${colors.white};
  }

  h1 {
    margin-bottom: 1rem;
  }

  h3 {
    margin: 1rem 0;
    font-weight: 400;
  }
`;

const LinkButton = styled(Link)`
  display: block;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${colors.primaryBlueBright};
  width: 250px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  margin: 2rem 0;

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const FilterHeading = styled.h2`
  color: ${colors.primaryBlue};
  margin: 8rem 2rem 4rem;
  font-size: 42px;
  text-align: center;
`;

const DescriptionCards = styled.div`
  padding: 0 0 4rem;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : colors.white};

  ul {
    margin: 0;
    padding: 0;
    list-style-position: inside;
  }

  p, ul, ol {
    color: ${colors.primaryText50}
  }
`;

const HoursCard = styled.div`
  padding: 2rem;
  margin: 5rem 0;
  height: 385px;
  display: grid;
  border-radius: 20px;
  background-color: ${colors.white};
  grid-template-rows: 100px 145px auto auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "icon"
    "."
    "title"
    "description";
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }

  svg {
    grid-area: icon;
    padding: 20px;
    width: 40px;
    height: 40px;
    background-color: ${colors.primaryYellow100};
    border-radius: 16px;
  }

  h2 {
    grid-area: title;
    color: ${colors.secondaryOrange500};
    font-size: 72px;
    margin: 0;
  }

  p {
    grid-area: description;
    margin: 0;
  }
`;

const DescriptionCard = styled.div`
  padding: 6rem 4rem;
  background-color: ${colors.lightGray};
  border-radius: 20px;
  display: grid;
  margin: 5rem 0;
  text-align: center;
  grid-template-rows: 120px 100px auto;
  grid-template-columns: 1fr;
  justify-content: center;
  transition: all 0.25s ease-in-out;

  svg {
    margin: 0 auto;
    padding: 20px;
    width: 55px;
    height: 55px;
    background-color: ${colors.primaryYellow100};
    border-radius: 20px;
    align-self: center;
  }

  h3 {
    margin: 1rem 0;
    color: ${colors.secondaryOrange500};
    align-self: end;
  }


  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const FlexboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 40px;
`;

const RequirementsSection = styled.div`
  padding: 4rem 0 10rem;
`;

const GeneralRequirementes = styled.div`
  width: 400px;
  padding: 2rem 0;
  h2 {
    color: ${colors.primaryBlue};
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p, ul, ol {
    color: ${colors.primaryText50};
  }
`;

const RequirementTabs = styled.div`
  flex-grow: 1;
`;

const Requirements = styled.div`
  border-radius: 12px;
  border: 1px solid ${colors.mediumGray};
  margin-bottom: 1rem;
`;

const RequirementsInfo = styled.div`
  padding: 0 4rem 2rem;
  color: ${colors.primaryText50};
`;

const RequirementsHeading = styled.button`
  padding: 2rem 4rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color: ${colors.primaryBlue};
  font-size: 1.25rem;
  appearance: none;
  border: none;
  outline: 0;
  background-color: transparent;
  cursor: pointer;

  span {
    display: block;
    font-size: 2rem;
  }
`;

const ProfileSection = styled.div`
  padding: 8rem 0;
  background-image: linear-gradient(270deg, #C67A1D 0%, #F79824 100%);
  color: ${colors.white};
`;

const ProfileFlexboxContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 40px;
  padding: 4rem 0;
`;

const ProfileSectionDescription = styled.div`
  max-width: 500px;
`;

const ProfileSectionImages = styled.div`
  max-width: 700px;
  position: relative;
`;

const ProfileImages = styled.div`
  display: grid;
  grid-template-rows: 80px auto 80px;
  grid-template-columns: 1fr 50px 1fr;
  img {
    border-radius: 12px;
    width: 380px;
    height: 460px;
    object-fit: cover;
    object-position: center;
    &:nth-of-type(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    &:nth-of-type(2) {
      grid-column: 2 / 4;
      grid-row: 2 / 4;
    }
  }
`;

const OtherPrograms = styled.div`
  padding: 6rem 4rem;

  h2 {
    color: ${colors.primaryBlue};
    text-align: center;
    margin-bottom: 4rem;
  }
`;