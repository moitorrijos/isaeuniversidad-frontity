import React from 'react';
import { connect } from 'frontity';
import AboutPage from './pages/about-page';

const Page = ({ state }) => {
  const page = state.source.get(state.router.link);
  if (page.id === 90517) {
    return(
      <AboutPage />
    );
  }
}

export default connect(Page);