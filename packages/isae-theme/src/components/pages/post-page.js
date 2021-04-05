import React from 'react';
import { connect, styled } from 'frontity';
import SlimHero from '../slim-hero';
import MainContainer from '../main-container';
import createMarkup from '../../helpers/create-markup';

const PostContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const PostPage = ({ state }) => {
  const single = state.source.get(state.router.link);
  const post = state.source.post[single.id];
  const { featured_image_src, title, excerpt, content } = post;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  return(
    <>
      <SlimHero
        title={title.rendered}
        background={background}
        featured_image={featured_image_src}
        description={excerpt.rendered}
      />
      <MainContainer>
        <PostContent dangerouslySetInnerHTML={createMarkup(content.rendered)} />
      </MainContainer>
    </>
  );
}

export default connect(PostPage);