import React from 'react';
import { styled, connect } from 'frontity';
import Link from "@frontity/components/link";
import colors from '../../styles/colors';

const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;

  a {
    display: block;
    padding: 40px 24px;
    text-decoration: none;
    color: ${colors.primaryText100};
    transition: all 0.25s ease-in-out;
    font-size: 15px;

    &.current-page, &:hover {
      background-color: ${colors.lightGray};
    }
  }
`;

const Navigation = ({ state }) => {
  const items = state.source.get('2').items;
  return (
    <Nav>
      {items.map(item => {
        const { id, title, url } = item;
        return(
          <Link
            key={id}
            link={url}
          >
            {title}
          </Link>
        )
      })}
    </Nav>
  );
};

export default connect(Navigation);