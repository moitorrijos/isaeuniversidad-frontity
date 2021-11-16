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
import JobSearchPage from './pages/job-search-page';
import VirtualPage from './pages/virtual-page';
import Congresos from './pages/Congresos';
import SearchPage from './pages/search-page';
import TutorialsPage from './pages/tutorials-page';
import Convenios from './pages/convenios';
import FormularioECOISAE from './pages/formulario-eco-isae';

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
    return(<ServicesPage page={109632} />);
  } else if (page.id === 109692) {
    return(<JobSearchPage page={109692} />);
  } else if (page.id === 109704) {
    return(<JobSearchPage page={109704} />);
  } else if (page.id === 109148) {
    return(<ServicesPage page={109148} />);
  } else if (page.id === 109856 ) {
    return(<ServicesPage page={109856} />);
  } else if (page.id === 109854) {
    return(<ServicesPage page={109854}/>);  
  } else if (page.id === 90519){
    return(<VirtualPage />);
  } else if (page.id === 109151){
    return(<Congresos page={109151} />);
  } else if (page.id === 110069 ){
    return(<TutorialsPage />);
  } else if (page.id === 110602) {
    return(<SearchPage />);
  }
  else if (page.id === 109144) {
    return(<Convenios/>);
  }
  else if (page.id === 110694 ) {
    return(<FormularioECOISAE/>);
  }
   else {
    return <GeneralPage />;
  }
}

export default connect(Page);