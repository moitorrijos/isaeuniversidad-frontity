import React, { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import toTitleCase from '../../helpers/to-title-case';
import PostHero from '../post-hero';
import Grid from '../grid';
import SlimCardItem from '../slim-card-item';
import useCarousel from '../../hooks/use-carousel';
import Carousel from '../carousel';
import FilterButtons from '../filter-buttons';

const MainContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

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

const UniversityLifePage = ({ state, actions }) => {
  const university_life = state.source.get(state.router.link);
  const university_life_link = university_life.link;
  const name = university_life_link.split('/').filter(string => string)[1];
  const description = state.source.vidauniversitaria[university_life.id].acf.descripcion;
  const default_image = `${state.source.url}/wp-content/uploads/2021/03/placeholder.jpg`;
  const branches = state.source.get('/sede').items;

  for (let i = 1; i <= 7; i++) {
    useEffect(() => {
      actions.source.fetch(`/category/${name}/page/${i}`);
    }, [])
  }
  
  const posts = Object.values(state.source.post);
  const latest_post = posts.length ? state.source.post[posts[0].id] : null;
  const { featured_image_src } = latest_post || '';

  const [ currentItem, setCurrentItem ] = useState(1);
  const carouselItems = useCarousel(currentItem, setCurrentItem, false);
  const active = { 
    borderBottomColor: colors.primaryBlueBright,
    color: colors.primaryBlueBright
  };
  const inactive = {
    borderBottomColor: colors.mediumGray,
    color: colors.mediumGray
  };
  const categories = Object.values(state.source.category).map(category => {
    return {
      id: category.id,
      slug: category.slug
    }
  });
  const [ currentCategory, setCurrentCategory ] = useState(0);
  const [ currentButton, setCurrentButton ] = useState('');
  function filterButton(slug) {
    const category = categories.filter(category => slug === category.slug);
    const categoryId = category[0].id
    setCurrentCategory(categoryId);
    setCurrentButton(slug);
  }
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
        <FilterButtons>
          {[...branches].reverse().map(branch => {
                let { id, slug, acf } = branch.ID ? state.source.sede[branch.ID] : state.source.sede[branch.id];
                return(
                  <button
                    key={id}
                    onClick={ () => { filterButton(slug) }}
                    style={ currentButton === slug ? {
                      backgroundColor: colors.secondaryBlue,
                      color: colors.white
                    } : {
                      backgroundColor: colors.white,
                      color: colors.secondaryBlue
                    } }
                  >
                    {acf.ciudad}
                  </button>
                )
              })}
        </FilterButtons>
      </Filter>
      {posts.length && <LatestNews>
        <Heading>Últimas {toTitleCase(name)}</Heading>
        <MainContainer>
          <Carousel height="5680px">
            <Grid
              columns="3"
              rows="4"
              gap="20px"
              small_gap="10px"
              style={{...carouselItems.item1, padding: "0 4rem"}}
            >
              {
                [...posts].slice(0,24).map(post => {
                  const {
                    id,
                    title,
                    link,
                    featured_image_src,
                    date,
                    author,
                    categories
                  } = state.source[post.type][post.id];
                  const { name } = state.source.author[author] || {};
                  const postDate = new Date(date);
                  if (
                      currentCategory === 0 ||
                      (categories.length && categories.includes(currentCategory))
                    ) {
                    return(
                      <SlimCardItem
                        key={id}
                        postDate={postDate}
                        title={title}
                        link={link}
                        name={name}
                        source_url={featured_image_src ? featured_image_src : default_image}
                      />)
                  } else {
                    return null;
                  }
                })
              }
            </Grid>
            <Grid
              columns="3"
              rows="4"
              gap="20px"
              small_gap="10px"
              style={{...carouselItems.item2, padding: "0 4rem"}}
            >
              {
                [...posts].slice(24,48).map(post => {
                  const {
                    id,
                    title,
                    link,
                    featured_image_src,
                    date,
                    author,
                    categories
                  } = state.source[post.type][post.id];
                  const { name } = state.source.author[author] || {};
                  const postDate = new Date(date);
                  if (
                      currentCategory === 0 ||
                      (categories.length && categories.includes(currentCategory))
                    ) {
                    return(
                      <SlimCardItem
                        key={id}
                        postDate={postDate}
                        title={title}
                        link={link}
                        name={name}
                        source_url={featured_image_src ? featured_image_src : default_image}
                      />)
                  } else {
                    return null;
                  }
                })
              }
            </Grid>
            <Grid
              columns="3"
              rows="4"
              gap="20px"
              small_gap="10px"
              style={{...carouselItems.item3, padding: "0 4rem"}}
            >
              {
                [...posts].slice(48,72).map(post => {
                  const {
                    id,
                    title,
                    link,
                    featured_image_src,
                    date,
                    author,
                    categories
                  } = state.source[post.type][post.id];
                  const { name } = state.source.author[author] || {};
                  const postDate = new Date(date);
                  if (
                      currentCategory === 0 ||
                      (categories.length && categories.includes(currentCategory))
                    ) {
                    return(
                      <SlimCardItem
                        key={id}
                        postDate={postDate}
                        title={title}
                        link={link}
                        name={name}
                        source_url={featured_image_src ? featured_image_src : default_image}
                      />)
                  } else {
                    return null;
                  }
                })
              }
            </Grid>
          </Carousel>
          <CarouselButtons>
            <button
              onClick={() => { setCurrentItem(1); }}
              style={ currentItem === 1 ? active : inactive }
            >1</button>
            <button
              onClick={() => { setCurrentItem(2);  }}
              style={ currentItem === 2 ? active : inactive }
            >2</button>
            <button
              onClick={() => { setCurrentItem(3); }}
              style={ currentItem === 3 ? active : inactive }
            >3</button>
          </CarouselButtons>
        </MainContainer>
      </LatestNews>}
    </>
  );
}

export default connect(UniversityLifePage);