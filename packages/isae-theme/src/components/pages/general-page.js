import React from "react";
import { styled, connect } from "frontity";
import SlimHero from '../slim-hero';
import ContactForm from '../base/contact-form';
import HomeNews from '../home/home-news';
import MainContainer from '../main-container';
import createMarkup from '../../helpers/create-markup';

const PageContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const GeneralPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const { featured_image_src, title, excerpt, content } = pageData;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  return(
    <>
      <SlimHero
        title = {title.rendered}
        background={background}
        featured_image={featured_image_src}
        description={excerpt.rendered}
      />
      <ContactForm />
      <MainContainer>
        <PageContent dangerouslySetInnerHTML={createMarkup(content.rendered)} />
      </MainContainer>
      <HomeNews />
    </>
  )
}

export default connect(GeneralPage);