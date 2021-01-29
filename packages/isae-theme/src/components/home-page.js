import React from 'react';
import HomeHero from './home/home-hero';
import HomeBranches from './home/home-branches';
import HomeAcademic from './home/home-academic';
import HomeNews from './home/home-news';
import HomeActivities from './home/home-activities';
import ContactForm from './base/contact-form';
import HomeLogos from './home/home-logos';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeBranches />
      <HomeAcademic />
      <HomeNews />
      <HomeActivities />
      <ContactForm />
      <HomeLogos />
    </>
  );
}

export default HomePage;