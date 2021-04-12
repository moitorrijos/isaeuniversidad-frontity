import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import useCarousel from '../../hooks/use-carousel';
import Carousel from '../carousel';
import Grid from '../grid';
import BoldCardItem from '../bold-card-item';

const LatestActivities = styled.div`
  padding: 4rem 0 8rem;
  background-color: ${colors.lightGray};
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
  margin-bottom: 8rem;
`;

const LatestActivitiesButtons = styled.div`
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
const HomeActivities = ({ state }) => {
  const activities = state.source.get("/category/actividades/").items;
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
    <LatestActivities>
      <Heading>Nuestras Actividades</Heading>
      <Container>
        <Carousel height="740px" med_height="1450px" large_height="2220px">
          <Grid
            columns="3"
            gap="30px"
            style={{...carouselItems.item1, padding: "0 4rem"}}>
            {[...activities].slice(0, 3).map(activity => {
              const { id, date, title, link, featured_image_src } = state.source[activity.type][activity.id];
              const activityDate = new Date(date);
              if (featured_image_src) {
                var source_url = featured_image_src
              } else {
                source_url = null;
              }
              return (
                <BoldCardItem
                  key={id}
                  activityDate={activityDate}
                  title={title}
                  link={link}
                  source_url={source_url}
                />
              )
            })}
          </Grid>
          <Grid
            columns="3"
            gap="30px"
            style={{...carouselItems.item2, padding: "0 4rem"}}>
            {[...activities].slice(3, 6).map(activity => {
              const { id, date, title, link, featured_image_src } = state.source[activity.type][activity.id];
              const activityDate = new Date(date);
              if (featured_image_src) {
                var source_url = featured_image_src
              } else {
                source_url = null;
              }
              return (
                <BoldCardItem
                  key={id}
                  activityDate={activityDate}
                  title={title}
                  link={link}
                  source_url={source_url}
                />
              )
            })}
          </Grid>
          <Grid
            columns="3"
            gap="30px"
            style={{...carouselItems.item3, padding: "0 4rem"}}>
            {[...activities].slice(6, 9).map(activity => {
              const { id, date, title, link, featured_image_src } = state.source[activity.type][activity.id];
              const activityDate = new Date(date);
              if (featured_image_src) {
                var source_url = featured_image_src
              } else {
                source_url = null;
              }
              return (
                <BoldCardItem
                  key={id}
                  activityDate={activityDate}
                  title={title}
                  link={link}
                  source_url={source_url}
                />
              )
            })}
          </Grid>
        </Carousel>
        <LatestActivitiesButtons>
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
        </LatestActivitiesButtons>
      </Container>
    </LatestActivities>
  );
}

export default connect(HomeActivities);