import React from 'react';
import HomeHero from './home/home-hero';
import HomeBranches from './home/home-branches';
import HomeAcademic from './home/home-academic';
import HomeNews from './home/home-news';
import HomeActivities from './home/home-activities';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeBranches />
      <HomeAcademic />
      <HomeNews />
      <HomeActivities />
    </>
  );
}

export default HomePage;