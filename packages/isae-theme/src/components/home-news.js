import React from 'react';
import { styled, connect } from 'frontity';
import MainContainer from './main-container';
import Grid from './grid';
import SlimCardItem from './slim-card-item';
import colors from '../styles/colors';

const LatestNews = styled.div`
  padding: 8rem 0;
`;

const Heading = styled.h2`
  text-align: center;
  color: ${colors.primaryBlue};
  padding: 0 20px;
`;

const HomeNews = ({ state }) => {
  const news = state.source.get(state.router.link).items
  return (
    <LatestNews>
      <Heading>Últimas Noticias</Heading>
      <MainContainer>
        <Grid columns="3" gap="30px">
          {[...news].slice(0, 3).map(post => {
            const { id, title, link, featured_media, date, author } = state.source[post.type][post.id];
            const { name } = state.source.author[author];
            const media = state.source.attachment[featured_media];
            const postDate = new Date(date);
            if (media) {
              var { alt_text, source_url } = media
            } else {
              var alt_text = null;
              var source_url = null;
            }
            return(
              <SlimCardItem
                key={id}
                postDate={postDate}
                title={title}
                link={link}
                name={name}
                alt_text={alt_text}
                source_url={source_url}
              />
            )
          })}
        </Grid>
      </MainContainer>
    </LatestNews>
  );
}

export default connect(HomeNews);