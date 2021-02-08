import React from 'react';
import { styled, connect } from 'frontity';
import colors from '../styles/colors';
import PostHero from './post-hero';
import Link from "@frontity/components/link";

const FilterParagraph = styled.p`
  max-width: 500px;
  margin: 8rem auto 2rem;
  text-align: center;
  color: ${colors.primaryText50};
  font-size: 18px;
`;

const FilterButtons = styled.div`
  max-width: 715px;
  margin: 0 auto 8rem;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  a {
    padding: 16px 40px;
    border-radius: 8px;
    border: 1px solid ${colors.secondaryBlue};
    color: ${colors.secondaryBlue};
    text-decoration: none;
    transition: all 0.25s ease-in-out;

    &:first-child {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }

    &:hover {
      background-color: ${colors.secondaryBlue};
      color: ${colors.white};
    }
  }
`;

const AcademicsPage = ({ state }) => {
  const academics = state.source.get(state.router.link);
  const { acf, title, featured_image_src } = state.source[academics.type][academics.id]
  const { descripcion } = acf;
  return(
    <>
      <PostHero
        background={state.source.url + "/wp-content/uploads/2021/02/background-isae-6.svg"}
        title={title.rendered}
        description={descripcion}
        imageUrl={featured_image_src}
      />
      <FilterParagraph>Filtrar {title.rendered} según sede</FilterParagraph>
      {acf.sedes && <FilterButtons>
          {acf.sedes.map(sede => {
            const { acf } = state.source.sede[sede.ID];
            return(
              <Link link={acf.link}>{acf.ciudad}</Link>
            )
          })}
        </FilterButtons>}
    </>
  );

}

export default connect(AcademicsPage);