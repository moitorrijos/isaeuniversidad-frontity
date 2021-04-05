import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import colors from '../../styles/colors';
import { effects } from '../../styles/effects';
import Link from '@frontity/components/link';
import Chevron from '../icons/chevron';
import ArrowIcon from '../icons/arrow-icon';

const Nav = styled.nav`
  display: flex;
  padding: 0 24px;
  flex-flow: row nowrap;
  border: none;
  transition: all 0.25s ease-in-out;

  @media (max-width: 834px) {
    display: ${props => props.mobileMenu ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    background-color: ${colors.white};
    height: 85vh;
    padding: 1rem 0;
  }
`;

const MenuLink = styled.button`
  border: none;
  outline: 0;
  appearance: none;
  padding: 46px 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryText100};
  transition: all 0.25s ease-in-out;
  font-size: 15px;
  font-size: clamp(13px, 0.9vw, 1rem);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  @media (max-width: 835px) {
    display: block;
    width: 100%;
    padding: 24px;
    font-size: 1rem;
  }

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
  padding: 12px 40px 0;

  h2 {
    font-size: 20px;
    padding-left: 40px;
    margin: 24px 0 16px;
    font-weight: 500;
  }
  
  @media (max-width: 834px) {
    top: 0;
    height: 80vh;
  }
`;

const SubMenuList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(260px, 1fr));
  border-bottom: 1px solid ${colors.mediumGray};
  margin-bottom: 18px;

  @media (max-width: 834px) {
    grid-template-columns: 1fr;
  }
`;

const SubSubmenu = styled.div`
  display: ${props => props.hidden_submenu ? 'none' : 'grid'};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.lightGray};
  padding: 12px 40px 24px;
  grid-template-columns: repeat(4, minmax(340px, 1fr));
  box-shadow: ${effects.boxShadow};

  a {
    color: ${colors.primaryText100};
    text-decoration: none;
    font-size: 15px;
    padding: 24px 40px;
  }

  @media (max-width: 834px) {
    top: 0;
    z-index: 4;
    grid-template-columns: 1fr;
    justify-content: space-between;
  }
`;

const SubMenuLink = styled.button`
  border: none;
  outline: 0;
  appearance: none;
  padding: 18px 40px 24px;
  text-align: left;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${colors.primaryText100};
  background-color: ${colors.lightGray};
  transition: all 0.25s ease-in-out;
  font-size: 14px;
  cursor: pointer;

  svg {
    margin-right: 10px;
  }

  @media (max-width: 834px) {
    font-size: 1rem;
  }
`;

const Navigation = ({ state, actions }) => {
  const { isMobileMenuOpen } = state.theme;
  const items = state.source.get('2').items;
  const [hidden, setHidden] = useState(true);
  const [hidden_submenu, setHiddenSubmenu] = useState(true);
  const [currentMenu, setCurrentMenu] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentType, setCurrentType] = useState('');
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [subSubmenuItems, setSubSubmenuItems] = useState([]);
  const [currentSubmenuTitle, setCurrentSubmenuTitle] = useState('');
  const showSubmenu = (item, e) => {
    const { title, type, url, children } = item;
    e.preventDefault();
    // hideAllMenus();
    setHidden(false);
    setCurrentMenu(!currentMenu);
    setCurrentType(type);
    if (type !== 'custom') {
      actions.router.set(url);
      hideAllMenus();
    }
    if (title === currentTitle) setHidden(!hidden);
    setCurrentTitle(title);
    setSubMenuItems(children);
  };
  const showSubSubmenu = (subItem, e) => {
    const { children, url, title } = subItem;
    e.preventDefault();
    if (children) {
      setSubSubmenuItems(children);
    } else {
      actions.router.set(url);
      hideAllMenus();
    }
    setCurrentSubmenuTitle(title);
    setHiddenSubmenu(!hidden_submenu);
  }
  const hideAllMenus = () => {
    setHidden(true);
    setHiddenSubmenu(true);
    actions.theme.closeMobileMenu();
  }
  return (
    <Nav mobileMenu={isMobileMenuOpen}>
      {items.map(item => {
        const { id, title, type, children } = item;
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
                  style={isCurrentMenuItem ? {transform: 'rotate(180deg)'} : isMobileMenuOpen ? {transform: 'rotate(-90deg)'} : {transform: 'rotate(0deg)'}}
                />
              }
            </MenuLink>
            {children && <Submenu hidden={hidden}>
              <h2>{currentTitle}</h2>
              {(currentType === "custom") &&
                <SubMenuList>
                  {subMenuItems && subMenuItems.map(subItem => {
                    const { id, title } = subItem;
                    const isCurrentSubmenuItem = (title === currentSubmenuTitle);
                    return(
                      <SubMenuLink
                        key={id}
                        onClick={e => showSubSubmenu(subItem, e)}
                        style={isCurrentSubmenuItem ? { color: colors.primaryBlueBright } : { color: colors.primaryText100 }}
                      >
                        <ArrowIcon
                          style={isCurrentSubmenuItem ? { display: 'inline-block' } : { display: 'none' }}
                        />
                        {title}
                      </SubMenuLink>
                    )
                  })}
                </SubMenuList>
              }
              {(currentTitle === title) && <SubSubmenu hidden_submenu={hidden_submenu}>
                {subSubmenuItems && subSubmenuItems.map(subSubmenuItem => {
                  const { id, url, title } = subSubmenuItem;
                  return(
                    <Link key={id} link={url} onClick={ hideAllMenus }>{title}</Link>
                  );
                })}
              </SubSubmenu>}
            </Submenu>}
          </React.Fragment>
        )
      })}
    </Nav>
  );
};

export default connect(Navigation);