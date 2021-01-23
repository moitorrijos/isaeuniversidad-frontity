import React from 'react';
import HomeHero from './home-hero';
import HomeBranches from './home-branches';
import HomeAcademic from './home-academic';
import HomeNews from './home-news';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeBranches />
      <HomeAcademic />
      <HomeNews />
    </>
  );
}

export default HomePage;