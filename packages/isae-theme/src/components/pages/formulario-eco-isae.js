import React from "react";
import { styled, connect } from "frontity";
import SlimHero from '../slim-hero';
import ContactForm from '../base/contact-form-ecoIsae';
import HomeNews from '../home/home-news-eco';
import MainContainer from '../main-container';
import createMarkup from '../../helpers/create-markup';

const PageContent = styled.div`
  padding: 4rem 0 8rem;
  max-width: 80ch;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.85;
`;

const GeneralPage = ({ state }) => {
  const data = state.source.get(state.router.link);
  const pageData = state.source.page[data.id];
  const { featured_image_src, title, excerpt, content } = pageData;
  const background = state.source.url+'/wp-content/uploads/2021/02/background-isae-8.svg';
  return(
    <>
      <SlimHero
        title = "Formulario ECO ISAE"
        background={background}
        featured_image={featured_image_src}
        description={excerpt.rendered}
      />
      <ContactForm />      
      <HomeNews />
    </>
  )
}

export default connect(GeneralPage);