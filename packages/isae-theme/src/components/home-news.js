import React from 'react';
import { styled, connect } from 'frontity';
import MainContainer from './main-container';
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
        {news.map(post => {
          const { id, title, link, featured_media } = state.source[post.type][post.id];
          const media = state.source.attachment[featured_media];
          if (media) {
            var { alt_text, source_url } = media
          } else {
            var alt_text = '';
            var source_url = '';
          }
          <SlimCardItem
            key={id}
            title={title}
            link={link}
            alt_text={alt_text}
            source_url={source_url}
          />
        })}
      </MainContainer>
    </LatestNews>
  );
}

export default connect(HomeNews);