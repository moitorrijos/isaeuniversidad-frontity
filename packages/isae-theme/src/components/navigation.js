import React from 'react';
import { styled, connect } from 'frontity';
import Link from './link';
import colors from '../styles/colors';

const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;

  a {
    display: block;
    padding: 40px 28px;
    text-decoration: none;
    color: ${colors.primaryBlue};
    transition: all 0.25s ease-in-out;

    &.current-page, &:hover {
      background-color: ${colors.lightGray};
    }
  }
`;

const Navigation = ({ state }) => (
  <Nav>
    {state.theme.menu.map(([name, link]) => {
      const isCurrentPage = state.router.link === link;
      return(
        <Link
          key={name}
          link={link}
          className={isCurrentPage ? 'current-page' : ''}
        >
          {name}
        </Link>
      )
    })}
  </Nav>
)

export default connect(Navigation);