import React from 'react';
import { connect } from 'frontity';
import AboutPage from './pages/about-page';
import AlumniPage from './pages/alumni-page';
import PlanningPage from './pages/planning-page';

const Page = ({ state }) => {
  const page = state.source.get(state.router.link);
  if (page.id === 90517) {
    return(<AboutPage />);
  } else if (page.id === 90944) {
    return(<AlumniPage />);
  } else if (page.id === 91148) {
    return(<PlanningPage />);
  }
}

export default connect(Page);