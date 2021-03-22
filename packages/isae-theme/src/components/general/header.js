import React from 'react';
import { styled } from 'frontity';
import { effects } from '../../styles/effects';
import TopHeader from './top-header';
import Navigation from './navigation';
import MobileMenu from '../mobile-menu';
import Logo from './logo';

const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  z-index: 4;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${effects.boxShadow};
`

const Header = () => (
  <>
    <TopHeader />
    <HeaderContainer>
      <Logo />
      <Navigation />
      <MobileMenu />
    </HeaderContainer>
  </>
);

export default Header;