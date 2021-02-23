import React from 'react';
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

const CareerPage = ({ state }) => {
  const career = state.source.get(state.router.link);
  const { 
    title,
    acf,
    featured_image_src
  } = state.source[career.type][career.id];
  return(
    <>
      <BigHero background={featured_image_src}>
        <h1>{title.rendered}</h1>
        <h3>{acf.descripcion}</h3>
        <LinkButton link={acf.boton_plan_de_estudio} >Ver Plan de Estudio</LinkButton>
      </BigHero>
      <DescriptionCards backgroundColor="mediumGray">
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
      <DescriptionCards backgroundColor="white">
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

const DescriptionCards = styled.div`
  padding: 6rem 0;
  background-color: ${props => props.backgroundColor ? colors.backgroundColor : colors.white};

  ul {
    margin: 0;
    padding: 0;
    list-style-position: inside;
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
    width: 60px;
    height: 60px;
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
  padding: 2rem 6rem;
  background-color: ${colors.lightGray};
  border-radius: 20px;
  display: grid;
  margin: 4rem 0;
  text-align: center;
  grid-template-rows: 140px auto auto;
  justify-content: center;
  align-items: center;
  grid-template-areas:
    "icon"
    "title"
    "description";
  transition: all 0.25s ease-in-out;

  h3 {
    margin: 0;
    color: ${colors.secondaryOrange500};
  }

  svg {
    margin: 0 auto;
    padding: 20px;
    width: 40px;
    height: 40px;
    background-color: ${colors.primaryYellow100};
    border-radius: 20px;
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;


const FilterHeading = styled.h2`
  color: ${colors.primaryBlue};
  margin: 10rem 4rem;
  font-size: 42px;
  text-align: center;
`;