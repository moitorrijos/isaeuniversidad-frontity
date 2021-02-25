import React from 'react';
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
    padding: 4rem;
  }
`;

const LatestNews = styled.div`
  padding: 2rem 0 6rem;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
`;

const UniversityLifePage = ({ state }) => {
  const university_life = state.source.get(state.router.link)
  const university_life_link = university_life.link;
  const name = university_life_link.split('/').filter(string => string)[1];
  const description = state.source.vidauniversitaria[university_life.id].acf.descripcion;
  const posts = state.source.get(`/category/${name}`).items;
  const latest_post = state.source.post[posts[0].id];
  const branches = state.source.get('/sede').items;
  return(
    <>
      <PostHero
        background={`${state.source.url}/wp-content/uploads/2021/02/news-background.svg`}
        title={toTitleCase(name)}
        description={description}
        imageUrl={latest_post.featured_image_src}
      />
      <Filter>
        <h4>Filtrar {toTitleCase(name)} Según Sede</h4>
        <BranchFilterButtons branches={branches} />
      </Filter>
      <LatestNews>
        <Heading>Últimas Noticias</Heading>
        <MainContainer>
          <Grid columns="3" gap="20px">
            {posts ?
              posts.map(post => {
                const {
                  id,
                  title,
                  link,
                  featured_image_src,
                  date,
                  author
                } = state.source[post.type][post.id];
                const { name } = state.source.author[author];
                const postDate = new Date(date);
                return(
                  <SlimCardItem
                    key={id}
                    postDate={postDate}
                    title={title}
                    link={link}
                    name={name}
                    source_url={featured_image_src}
                  />
              )})
              :
              <h4>No hay {name} disponibles.</h4>
            }
          </Grid>
        </MainContainer>
      </LatestNews>
    </>
  );
}

export default connect(UniversityLifePage);