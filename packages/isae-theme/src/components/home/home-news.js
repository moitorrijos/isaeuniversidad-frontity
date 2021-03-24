import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import useCarousel from '../../hooks/use-carousel';
import MainContainer from '../main-container';
import Grid from '../grid';
import Carousel from '../carousel';
import SlimCardItem from '../slim-card-item';

const LatestNews = styled.div`
  padding: 4rem 0 0;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
  margin-top: 2rem;
  margin-bottom: 8rem;
`;

const LatestNewsButtons = styled.div`
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

const HomeNews = ({ state }) => {
  const news = state.source.get("/category/destacada/").items;
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
  return (
    <LatestNews>
      <Heading>Últimas Noticias</Heading>
      <MainContainer>
        <Carousel height="720px" med_height="1460px" large_height="2090px">
          <Grid columns="3" gap="30px" style={carouselItems.item1}>
            {[...news].slice(0, 3).map(post => {
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
              )
            })}
          </Grid>
          <Grid columns="3" gap="30px" style={carouselItems.item2}>
            {[...news].slice(3, 6).map(post => {
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
              )
            })}
          </Grid>
          <Grid columns="3" gap="30px" style={carouselItems.item3}>
            {[...news].slice(6, 9).map(post => {
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
              )
            })}
          </Grid>
        </Carousel>
        <LatestNewsButtons> 
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
        </LatestNewsButtons>
      </MainContainer>
    </LatestNews>
  );
}

export default connect(HomeNews);