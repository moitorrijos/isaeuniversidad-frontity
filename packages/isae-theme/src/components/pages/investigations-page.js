import React from 'react';
import { connect, styled } from 'frontity';
import colors from '../../styles/colors';
import SlimHero from '../slim-hero';
import RegisterForm from '../base/register-form';
import MainContainer from '../main-container';
import Grid from '../grid';
import Link from '@frontity/components/link';
import { months } from '../../helpers/months';

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

const PostCardLink = styled(Link)`
  padding: 2rem 3rem 4rem;
  text-decoration: none;
  color: ${colors.primaryText80};
  height: 297px;
  border-radius: 24px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${colors.primaryBlueBright};
    color: ${colors.white};
    border-radius: 20px;
  }
`;

const PostDate = styled.p`
  align-self: flex-start;
`;

const PostTitle = styled.h3`
  align-self: flex-start;
  margin: 0;
`;

const PostAuthor = styled.p`
  align-self: flex-end;
  color: ${colors.primaryBlueBright};

  ${PostCardLink}:hover &{
    color: ${colors.white};
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
                <PostCardLink key={id} link={link}>
                  <PostDate>{day} de {months[parseInt(getMonth)]} de {year}</PostDate>
                  <PostTitle>{title.rendered}</PostTitle>
                  <PostAuthor>{name}</PostAuthor>
                </PostCardLink>
              );
            })}
          </Grid>
        </MainContainer>
      </LatestActivities>
    </>
  );
}

export default connect(InvesgitationsPage);