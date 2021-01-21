import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Image from "@frontity/components/image";
import MainButton from './main-button';

const Academic = styled.div`
  padding: 8rem 0;

  &:nth-of-type(odd) {
    background-color: ${colors.lightGray};
  }
`;

const AcademicContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
`;

const AcademicInfo = styled.div`
  width: 275px;

  h2 {
    color: ${colors.primaryBlue};
    font-size: 35px;
  }

  p {
    font-size: 18px;
    color: ${colors.primaryText30};
    margin-bottom: 2rem;
  }
`;

const AcademicImage = styled.figure`
  margin: 0;
  width: 575px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const HomeAcademic = ({ state }) => {
  const items = state.source.get('/ofertaacadmica').items;
  return ([...items].reverse().map((item, index) => {
    const { id, title, featured_media, acf } = state.source[item.type][item.id]
    const media = state.source.attachment[featured_media];
    const { source_url, alt_text } = media;
    function createMarkup() {
      return {__html: acf.descripcion};
    }
    if (index % 2 !== 0) {
      return (
        <Academic key={id}>
          <MainContainer>
              <AcademicContainer>
              <AcademicImage>
                <Image alt={alt_text} src={source_url} />
              </AcademicImage>
              <AcademicInfo>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={createMarkup()} />
                <MainButton
                  background={colors.primaryBlue}
                  color={colors.white}
                  link="#0"
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
        <Academic key={id}>
          <MainContainer>
            <AcademicContainer>
              <AcademicInfo>
                <h2>{title.rendered}</h2>
                <div dangerouslySetInnerHTML={createMarkup()}  />
                <MainButton
                  background={colors.primaryBlue}
                  color={colors.white}
                  link="#0"
                >
                  Ver Ofertas
                </MainButton>
              </AcademicInfo>
              <AcademicImage>
                <Image alt={alt_text} src={source_url} />
              </AcademicImage>
            </AcademicContainer>
          </MainContainer>
        </Academic>
      );
    };
  }));
};

export default connect(HomeAcademic);
