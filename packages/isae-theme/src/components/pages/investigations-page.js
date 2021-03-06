import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import SlimHero from '../slim-hero';
import RegisterForm from '../base/register-form';
import MainContainer from '../main-container';
import Grid from '../grid';
import PostCard from '../post-card';

const LatestActivities = styled.div`
  padding: 8rem 0;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    padding: 0 4rem 4rem;
    text-align: center;
    color: ${colors.primaryBlueBright};
  }
`;


const InvesgitationsPage = ({ state }) => {
  const investigation = state.source.get(state.router.link);
  const post = state.source[investigation.type][investigation.id];
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  const { title, featured_image_src, acf } = post;
  const latest_activities = state.source.get('/category/actividades/').items;
  return(
    <>
      <SlimHero
        title={title.rendered}
        background={state.source.url+'/wp-content/uploads/2021/02/background-isae-7.svg'}
        featured_image={featured_image_src}
        description={acf.descripcion}
      />
      <RegisterForm />
      <LatestActivities background={background}>
        <h2>Actividades Estudiantiles</h2>
        <MainContainer>
          <Grid columns="3" gap="30px">
            {[...latest_activities].reverse().map(activity => {
              const { id, link, title, author, date } = state.source.post[activity.id];
              const { name } = state.source.author[author];
              const postDate = new Date(date);
              const day = postDate.getDate();
              const getMonth = postDate.getMonth();
              const year = postDate.getFullYear();
              return(
                <PostCard
                  key={id}
                  link={link}
                  title={title}
                  name={name}
                  getMonth={getMonth}
                  day={day}
                  year={year}
                />
              );
            })}
          </Grid>
        </MainContainer>
      </LatestActivities>
    </>
  );
}

export default connect(InvesgitationsPage);