import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import Link from "@frontity/components/link";
import colors from '../../styles/colors';

const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;
  border: none;

  a {
    display: block;
    padding: 42px 24px;
    text-decoration: none;
    color: ${colors.primaryText100};
    transition: all 0.25s ease-in-out;
    font-size: 15px;

    &.current-page, &:hover, &:active {
      background-color: ${colors.lightGray};
    }
  }
`;

const Submenu = styled.div`
  display: ${props => props.hidden ? 'none' : 'block'};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  padding: 24px 40px;

  h2 {
    font-size: 20px;
  }
`;

const SubMenuList = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid ${colors.mediumGray};
  margin-bottom: 12px;

  a {
    padding: 24px 40px;
  }
`;

const Navigation = ({ state, actions }) => {
  const items = state.source.get('2').items;
  const [hidden, setHidden] = useState(true);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentType, setCurrentType] = useState('');
  const showSubmenu = (item, e) => {
    const { title, type, url } = item;
    e.preventDefault();
    setHidden(false);
    setCurrentType(type);
    if (type !== 'custom') {
      actions.router.set(url);
      setHidden(true);
    }
    if (title === currentTitle) setHidden(!hidden);
    setCurrentTitle(title);
  };
  return (
    <Nav>
      {items.map(item => {
        const { id, title, type } = item;
        return(
          <Link
            key={id}
            onClick={e => showSubmenu(item, e)}
            link="#"
          >
            {title}
            <Submenu key={id} hidden={hidden}>
              <h2>{currentTitle}</h2>
              {currentType === "custom" && 
                <SubMenuList>
                  <Link src="#0">Prueba 1</Link>
                  <Link src="#0">Prueba 2</Link>
                  <Link src="#0">Prueba 3</Link>
                  <Link src="#0">Prueba 4</Link>
                  <Link src="#0">Prueba 5</Link>
                </SubMenuList>
              }
            </Submenu>
          </Link>
        )
      })}
    </Nav>
  );
};

export default connect(Navigation);