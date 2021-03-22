import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import HamburgerIcon from './icons/menu-icon';

const MenuToggle = styled.button`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryBlue};
  width: 40px;
  height: 40px;

  @media (min-width: 835px) {
    display: none;
  }
`;

const MobileMenu = () => {
  const toggleMenu = () => {
    console.log('toggle menu');
  }
  return(
    <MenuToggle onClick={toggleMenu}>
      <HamburgerIcon color={colors.white} size="24px" />
    </MenuToggle>
  );
}

export default MobileMenu;