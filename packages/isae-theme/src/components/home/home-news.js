import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import { InView } from 'react-intersection-observer';
import useCarousel from '../../hooks/use-carousel';
import Grid from '../grid';
import Carousel from '../carousel';
import SlimCardItem from '../slim-card-item';

const LatestNews = styled.div`
  padding: 4rem 0 0;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
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
  const news = state.source.get("/category/noticias/").items;
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
  const [ visible, setVisible ] = useState(false);
  return (
    <LatestNews>
      <Heading>Últimas Noticias</Heading>
      <Container>
        <Carousel height="740px" med_height="1460px" large_height="2220px">
          <InView onChange={(inView) => { setVisible(inView) }} >
            <Grid
              columns="3"
              gap="30px"
              style={{...carouselItems.item1, padding: "0 4rem"}}
            >
              {[...news].slice(0, 3).map((post, index) => {
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
                    source_url={featured_image_src}
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100px)",
                      transitionDelay: (+index * 0.25) + 's'
                    }}
                  />
                )
              })}
            </Grid>
          </InView>
          <Grid
            columns="3"
            gap="30px"
            style={{...carouselItems.item2, padding: "0 4rem"}}
          >
            {[...news].slice(3, 6).map(post => {
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
                  source_url={featured_image_src}
                />
              )
            })}
          </Grid>
          <Grid
            columns="3"
            gap="30px"
            style={{...carouselItems.item3, padding: "0 4rem"}}
          >
            {[...news].slice(6, 9).map(post => {
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
      </Container>
    </LatestNews>
  );
}

export default connect(HomeNews);