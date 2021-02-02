import React from 'react';
import { styled, connect } from 'frontity';
import MainContainer from '../main-container';
import Grid from '../grid';
import BoldCardItem from '../bold-card-item';
import colors from '../../styles/colors';

const LatestActivities = styled.div`
  padding: 8rem 0;
  background-color: ${colors.lightGray};
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
  margin-bottom: 8rem;
`;

const HomeActivities = ({ state }) => {
  const activities = state.source.get("/category/actividades/").items;
  return (
    <LatestActivities>
      <Heading>Nuestras Actividades</Heading>
      <MainContainer>
        <Grid columns="3" gap="30px">
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
      </MainContainer>
    </LatestActivities>
  );
}

export default connect(HomeActivities);