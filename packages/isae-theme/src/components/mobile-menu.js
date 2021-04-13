import React from 'react';
import { styled, connect, Global } from 'frontity';
import colors from '../styles/colors';
import { HamburgerIcon, CloseIcon } from './icons/menu-icon';

const MenuToggle = styled.button`
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primaryBlue};
  width: 40px;
  height: 40px;
  z-index: 3;

  @media (min-width: 1320px) {
    display: none;
  }
`;

const MobileMenu = ({ state, actions }) => {
  const { isMobileMenuOpen } = state.theme;
  return(
    <MenuToggle onClick={actions.theme.toggleMobileMenu}>
      {
        isMobileMenuOpen ? (
          <>
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color={colors.white} size="24px" />
          </>
        ) :
        <HamburgerIcon color={colors.white} size="24px" />
      }
    </MenuToggle>
  );
}

export default connect(MobileMenu);