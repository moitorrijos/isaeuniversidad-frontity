import React from "react";
import { connect, styled } from "frontity";
import colors from "../../styles/colors";
import { effects } from "../../styles/effects";
import MainMessage from "../main-message";
import MainContainer from "../main-container";
import Grid from "../grid";
import Image from "@frontity/components/image";
import PrimaryButton from "../primary-button";
import createMarkup from "../../helpers/create-markup";
import MemoryCard from "../memory-card";

const PlanningSection = styled.div`
  padding: 8rem 0;
  background-color: ${(props) => props.bgColor};

  @media (max-width: 834px) {
    padding: 4rem 0;
  }
`;

const PlanDescription = styled.div`
  align-self: center;
  max-width: 480px;
  h2 {
    font-size: 42px;
    color: ${colors.primaryBlue};
  }
  @media (max-width: 600px) {
    order: 2;
  }
`;

const PlanImage = styled.figure`
  margin: 0;
  align-self: center;
  img {
    width: 100%;
    height: 528px;
    border-radius: 20px;
    box-shadow: ${effects.boxShadow};
    object-fit: cover;
    object-position: center top;

    @media (max-width: 834px) {
      height: 420px;
    }

    @media (max-width: 600px) {
      height: 380px;
    }
  }

  @media (max-width: 600px) {
    order: 1;
  }
`;

const FunctionsSection = styled.div`
  padding: 6rem 0 8rem;
  background-image: linear-gradient(
    20deg,
    ${colors.lightGray},
    ${colors.grisFondo}
  );

  @media (max-width: 834px) {
    padding: 4rem 0 8rem;
  }
`;

const CenteredHeading = styled.h2`
  padding: 0 4rem;
  text-align: center;
  color: ${(props) => props.color};
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

const MemorySection = styled.div`
  padding: 10rem 0;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
`;

const PlanningPage = ({ state, page }) => {
  const plan = state.source.page[page];
  const { acf, title, featured_image_src } = plan;
  const background =
    state.source.url + "/wp-content/uploads/2021/03/background-isae-11.svg";
  const background2 =
    state.source.url + "/wp-content/uploads/2021/03/background-isae-12.svg";
  // const imageUrl = featured_image_src;
  const imageUrl =
    "https://isae.prontoaqui.com/wp-content/uploads/2021/03/Rectangle12.jpg";

  console.log(plan);

  console.log(plan);
  return (
    <>
      <MainMessage
        background={background}
        bgColor={colors.white}
        imageUrl={imageUrl}
        title={title.rendered}
        description={acf.descripcion}
      />
      <PlanningSection bgColor={colors.lightGray}>
        
        <FunctionsSection>
          <CenteredHeading color={colors.primaryBlue}>
            {acf.objetivos.titulo}
          </CenteredHeading>
          <MainContainer>
            <Functions
              dangerouslySetInnerHTML={createMarkup(acf.objetivos.descripcion)}
            />
          </MainContainer>
        </FunctionsSection>

        <FunctionsSection>
          <CenteredHeading color={colors.primaryBlue}>
            {acf.politicas_curriculares.titulo}
          </CenteredHeading>
          <MainContainer>
            <Functions
              dangerouslySetInnerHTML={createMarkup(
                acf.politicas_curriculares.descripcion
              )}
            />
          </MainContainer>
        </FunctionsSection>

      </PlanningSection>
    </>
  );
};

export default connect(PlanningPage);
