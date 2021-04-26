import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import toTitleCase from '../../helpers/to-title-case';
import PostHero from '../post-hero';
import BranchFilterButtons from '../branch-filter-buttons';
import Grid from '../grid';
import SlimCardItem from '../slim-card-item';
import MainContainer from '../main-container';

const Filter = styled.div`
  h4 {
    color: ${colors.primaryText50};
    text-align: center;
    padding: 4rem 0 2rem;
  }
`;

const LatestNews = styled.div`
  padding: 2rem 0 6rem;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
  margin: 1rem 0 6rem;
`;

const CarouselButtons = styled.div`
  max-width: 450px;
  margin: 1rem auto 6rem;
  display: flex;
  flex-flow: row nowrap;

  button {
    flex: 1;
    padding : 1.5rem 3rem;
    border-bottom: 3px solid ${colors.mediumGray};
    cursor: pointer;
    transition: all 0.25 ease-in-out;
  }
`;

const UniversityLifePage = ({ state }) => {
  const university_life = state.source.get(state.router.link);
  const university_life_link = university_life.link;
  const name = university_life_link.split('/').filter(string => string)[1];
  const description = state.source.vidauniversitaria[university_life.id].acf.descripcion;
  const default_image = `${state.source.url}/wp-content/uploads/2021/03/placeholder.jpg`;
  const posts = state.source.get(`/category/${name}/`).items || [];
  const [ currentPage, setCurrentPage ] = useState(1);
  const latest_post = posts.length ? state.source.post[posts[0].id] : null;
  const { featured_image_src } = latest_post || '';
  const branches = state.source.get('/sede').items;
  const active = { 
    borderBottomColor: colors.primaryBlueBright,
    color: colors.primaryBlueBright
  };
  const inactive = {
    borderBottomColor: colors.mediumGray,
    color: colors.mediumGray
  };
  return(
    <>
      <PostHero
        background={`${state.source.url}/wp-content/uploads/2021/02/news-background.svg`}
        title={toTitleCase(name)}
        description={description}
        imageUrl={featured_image_src ? featured_image_src : default_image}
      />
      <Filter>
        <h4>Filtrar {toTitleCase(name)} Según Sede</h4>
        <BranchFilterButtons branches={branches} />
      </Filter>
      {posts.length && <LatestNews>
        <Heading>Últimas {toTitleCase(name)}</Heading>
        <MainContainer>
          <Grid columns="3" rows="4" gap="20px" small_gap="10px">
            {
              posts.map(post => {
                const {
                  id,
                  title,
                  link,
                  featured_image_src,
                  date,
                  author
                } = state.source[post.type][post.id];
                const { name } = state.source.author[author] || {};
                const postDate = new Date(date);
                return(
                  <SlimCardItem
                    key={id}
                    postDate={postDate}
                    title={title}
                    link={link}
                    name={name}
                    source_url={featured_image_src ? featured_image_src : default_image}
                  />
              )})
            }
          </Grid>
          <CarouselButtons>
            <button
              onClick={() => { setCurrentPage(1); }}
              style={ currentPage === 1 ? active : inactive }
            >1</button>
            <button
              onClick={() => { setCurrentPage(2);  }}
              style={ currentPage === 2 ? active : inactive }
            >2</button>
            <button
              onClick={() => { setCurrentPage(3); }}
              style={ currentPage === 3 ? active : inactive }
            >3</button>
          </CarouselButtons>
        </MainContainer>
      </LatestNews>}
    </>
  );
}

export default connect(UniversityLifePage);