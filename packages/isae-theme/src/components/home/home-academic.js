import React from 'react';
import { connect, styled, css } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import Image from "@frontity/components/image";
import MainButton from '../main-button';
import createMarkup from '../../helpers/create-markup';

const Academic = styled.div`
  padding: 6rem 0;
  background-repeat: no-repeat;
  background-position: center center;

  &:nth-of-type(odd) {
    background-color: ${colors.lightGray};
  }

  @media (max-width: 600) {
    background: none;
  }
`;

const AcademicContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const AcademicInfo = styled.div`
  width: 320px;

  h2 {
    color: ${colors.primaryBlue};
    font-size: 35px;
  }

  p {
    font-size: 20px;
    line-height: 1.5;
    color: ${colors.primaryText50};
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    order: 2;
    width: 100%;
  }
`;

const AcademicImage = styled.figure`
  margin: 0;

  img {
    height: 528px;
    width: 600px;
    border-radius: 22px;
    object-fit: cover;
    object-position: center;

    @media (max-width: 834px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      height: 300px;
    }
  }

  @media (max-width: 834px) {
    width: 50%;
  }

  @media (max-width: 600px) {
    order: 1;
    width: 100%;
  }
`;

const background = (position, backgroundUrl) => css`
  background-image: url(${backgroundUrl}/wp-content/uploads/2021/01/background-isae-${position}.svg);
  background-position: ${position % 2 === 0 ? '20% center' : '80% center'};

  @media (max-width: 834px) {
    background-position: center 10%;
  }
`;

const HomeAcademic = ({ state }) => {
  const items = state.source.get('/ofertaacadmica').items;
  const backgroundUrl = state.source.url;
  return ([...items].reverse().map((item, index) => {
    const { id, title, featured_image_src, acf, link } = state.source[item.type][item.id];
    const position = +index + 1;
    if (index % 2 !== 0) {
      return (
        <Academic
          key={id}
          css={background(position, backgroundUrl)}
        >
          <MainContainer>
            <AcademicContainer>
              <AcademicImage>
                <Image alt={title.rendered} src={featured_image_src} />
              </AcademicImage>
              <AcademicInfo>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={createMarkup(acf.descripcion)} />
                <MainButton
                  background={colors.primaryBlue}
                  color={colors.white}
                  link={link}
                >
                  Ver Ofertas
                </MainButton>
              </AcademicInfo>
            </AcademicContainer>
          </MainContainer>
        </Academic>
      );
    } else {
      return (
        <Academic
          key={id}
          css={background(position, backgroundUrl)}
        >
          <MainContainer>
            <AcademicContainer>
              <AcademicInfo>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={createMarkup(acf.descripcion)} />
                <MainButton
                  background={colors.primaryBlue}
                  color={colors.white}
                  link={link}
                >
                  Ver Ofertas
                </MainButton>
              </AcademicInfo>
              <AcademicImage>
                <Image alt={title.rendered} src={featured_image_src} height="529" />
              </AcademicImage>
            </AcademicContainer>
          </MainContainer>
        </Academic>
      );
    };
  }));
};

export default connect(HomeAcademic);
