import React, { useState } from 'react';
import { connect, styled, css } from 'frontity';
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import { InView } from 'react-intersection-observer';
import Image from "@frontity/components/image";
import MainButton from '../main-button';
import createMarkup from '../../helpers/create-markup';

const Academic = styled.div`
  padding: 8rem 0;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AcademicInfo = styled.div`
  width: 320px;
  transition: all 0.75s 0.25s ease-in-out;

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
  transition: all 0.75s 0.15s ease-in-out;

  img {
    height: 528px;
    width: 100%;
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
    const [ visible, setVisible ] = useState(false);
    const [ visible2, setVisible2 ] = useState(false);
    if (index % 2 !== 0) {
      return (
        
        <Academic
          key={id}
          css={background(position, backgroundUrl)}
        >
          <InView onChange={(inView) => { setVisible(inView) }} >
            <MainContainer>
              <AcademicContainer>
                <AcademicImage
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateX(0)" : "translateX(-100px)",
                  }}
                >
                  <Image alt={title.rendered} src={featured_image_src} />
                </AcademicImage>
                <AcademicInfo
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(100px)",
                  }}
                >
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
          </InView>
        </Academic>
      );
    } else {
      return (
        <Academic
          key={id}
          css={background(position, backgroundUrl)}
        >
          <InView onChange={(inView) => { setVisible2(inView) }} >
            <MainContainer>
              <AcademicContainer>
                <AcademicInfo
                  style={{
                    opacity: visible2 ? 1 : 0,
                    transform: visible2 ? "translateY(0)" : "translateY(100px)",
                  }}
                >
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
                <AcademicImage
                  style={{
                    opacity: visible2 ? 1 : 0,
                    transform: visible2 ? "translateX(0)" : "translateX(100px)",
                  }}
                >
                  <Image alt={title.rendered} src={featured_image_src} height="529" />
                </AcademicImage>
              </AcademicContainer>
            </MainContainer>
          </InView>
        </Academic>
      );
    };
  }));
};

export default connect(HomeAcademic);
