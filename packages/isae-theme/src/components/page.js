import React from 'react';
import { connect } from 'frontity';
import AboutPage from './pages/about-page';
import AlumniPage from './pages/alumni-page';
import PlanningPage from './pages/planning-page';
import PaymentPage from './pages/payment-page';
import AWSPage from './pages/aws-page';
import GeneralPage from './pages/general-page';
import ZigZagPage from './pages/zig-zag-page';
import LegalPage from './pages/legal-page';
import ServicesPage from './pages/services-page';

const Page = ({ state }) => {
  const page = state.source.get(state.router.link);
  if (page.id === 90517) {
    return(<AboutPage />);
  } else if (page.id === 90944) {
    return(<AlumniPage />);
  } else if (page.id === 91148) {
    return(<PlanningPage page={91148} />);
  } else if (page.id === 109103) {
    return(<PlanningPage page={109103} />);
  } else if (page.id === 91204) {
    return(<PaymentPage />);
  } else if (page.id === 109114) {
    return(<AWSPage page={109114} />);
  } else if (page.id === 90536) {
    return(<ZigZagPage page={90536} />);
  } else if (page.id === 90553) {
    return(<LegalPage />);
  } else if (page.id === 109632) {
    return(<ServicesPage />);
  } else {
    return <GeneralPage />;
  }
}

export default connect(Page);