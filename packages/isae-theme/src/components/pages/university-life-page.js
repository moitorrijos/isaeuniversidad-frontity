import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import useCarousel from '../../hooks/use-carousel';
import toTitleCase from '../../helpers/to-title-case';
import PostHero from '../post-hero';
import BranchFilterButtons from '../branch-filter-buttons';
import Carousel from '../carousel';
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
  const [ currentItem, setCurrentItem ] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem);
  const active = { 
    borderBottomColor: colors.primaryBlueBright,
    color: colors.primaryBlueBright
  };
  const inactive = {
    borderBottomColor: colors.mediumGray,
    color: colors.mediumGray
  };
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
        <Heading>Últimas {toTitleCase(name)}</Heading>
        <MainContainer>
          <Carousel height="720px" med_height="1600px" large_height="2200px">
            <Grid columns="3" gap="20px" small_gap="10px" style={carouselItems.item1}>
              {
                [...posts].slice(0, 3).map(post => {
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
              }
            </Grid>
            <Grid columns="3" gap="20px" small_gap="10px" style={carouselItems.item2}>
              {
                [...posts].slice(3, 6).map(post => {
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
              }
            </Grid>
            <Grid columns="3" gap="20px" small_gap="10px" style={carouselItems.item3}>
              {
                [...posts].slice(6, 9).map(post => {
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
              }
            </Grid>
          </Carousel>
          <CarouselButtons>
            <button
              onClick={() => { setCurrentItem(1)}}
              style={ currentItem === 1 ? active : inactive}
            >1</button>
            <button
              onClick={() => { setCurrentItem(2)}}
              style={ currentItem === 2 ? active : inactive}
            >2</button>
            <button
              onClick={() => { setCurrentItem(3)}}
              style={ currentItem === 3 ? active : inactive}
            >3</button>
          </CarouselButtons>
        </MainContainer>
      </LatestNews>
    </>
  );
}

export default connect(UniversityLifePage);