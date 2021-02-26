import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import Chevron from '../icons/chevron';

const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;
  border: none;
`;

const MenuLink = styled.button`
  border: none;
  outline: 0;
  appearance: none;
  padding: 42px 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryText100};
  transition: all 0.25s ease-in-out;
  font-size: 15px;
  font-size: clamp(13px, 0.9vw, 1rem);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-left: 10px;
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
    padding-left: 40px;
    margin: 24px 0 16px;
    font-weight: 500;
  }
`;

const SubSubmenu = styled.div`
  display: ${props => props.hidden_submenu ? 'none' : 'block'};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  padding: 24px 40px;
`;

const SubMenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  border-bottom: 1px solid ${colors.mediumGray};
  margin-bottom: 12px;
`;

const SubSubmenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding: 40px 20px;
`;

const SubMenuLink = styled.button`
  border: none;
  outline: 0;
  appearance: none;
  padding: 42px 40px;
  text-align: left;
  display: block;
  text-decoration: none;
  color: ${colors.primaryText100};
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`;

const Navigation = ({ state, actions }) => {
  const items = state.source.get('2').items;
  const [hidden, setHidden] = useState(true);
  const [hidden_submenu, setHiddenSubmenu] = useState(true);
  const [currentMenu, setCurrentMenu] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentType, setCurrentType] = useState('');
  const [subMenuItems, setSubMenuItems] = useState([]);
  const showSubmenu = (item, e) => {
    const { title, type, url, children } = item;
    e.preventDefault();
    setHidden(false);
    setCurrentMenu(!currentMenu);
    setCurrentType(type);
    if (type !== 'custom') {
      actions.router.set(url);
      setHidden(true);
    }
    if (title === currentTitle) setHidden(!hidden);
    setCurrentTitle(title);
    setSubMenuItems(children);
  };
  const showSubSubmenu = (subItem, e) => {
    // const { url, title, type, children } = item;
    e.preventDefault();
    console.log(subItem);
    setHiddenSubmenu(!hidden_submenu);
  }
  return (
    <Nav>
      {items.map(item => {
        const { id, title, type, children } = item;
        console.log(children ? children : 'no children');
        const isCurrentMenuItem = (currentTitle === title) && !hidden
        return(
          <React.Fragment key={id}>
            <MenuLink
              onClick={e => showSubmenu(item, e)}
              style={isCurrentMenuItem ? {backgroundColor: colors.lightGray} : {backgroundColor: colors.white}}
            >
              {title}
              {type === 'custom' &&
                <Chevron
                  style={isCurrentMenuItem ? {transform: 'rotate(180deg)'} : {transform: 'rotate(0)'}}
                />
              }
            </MenuLink>
            {children && <Submenu hidden={hidden}>
              <h2>{currentTitle}</h2>
              {currentType === "custom" &&
                <SubMenuList>
                  {subMenuItems && subMenuItems.map(subItem => {
                    const { id, title } = subItem;
                    return(
                      <SubMenuLink key={id} onClick={e => showSubSubmenu(subItem, e)}>{title}</SubMenuLink>
                    )
                  })}
                </SubMenuList>
              }
              <SubSubmenu hidden_submenu={hidden_submenu}>
                <SubSubmenuList>
                  <p>Sub Submenu goes here...</p>
                </SubSubmenuList>
              </SubSubmenu>
            </Submenu>}
          </React.Fragment>
        )
      })}
    </Nav>
  );
};

export default connect(Navigation);