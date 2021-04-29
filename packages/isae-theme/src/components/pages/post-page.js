import React from 'react';
import { connect, styled } from 'frontity';
import SlimHeroPost from '../slim-hero-post';
import MainContainer from '../main-container';
import createMarkup from '../../helpers/create-markup';

const PostContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  font-size: 1.1rem;
  line-height: 1.85;
  margin: 0 auto;
`;

const PostPage = ({ state }) => {
  const single = state.source.get(state.router.link);
  const post = state.source.post[single.id];
  const { featured_image_src, title, excerpt, content, date, author } = post;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  return(
    <>
      <SlimHeroPost
        title={title.rendered}
        background={background}
        featured_image={featured_image_src}
        description={excerpt.rendered}
        date={date}
        author={author}
      />
      <MainContainer>
        <PostContent dangerouslySetInnerHTML={createMarkup(content.rendered)} />
      </MainContainer>
    </>
  );
}

export default connect(PostPage);