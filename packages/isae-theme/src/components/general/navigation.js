import React, { useState } from 'react';
import { styled, connect } from 'frontity';
import Link from "@frontity/components/link";
import colors from '../../styles/colors';

const Nav = styled.nav`
  padding: 0 24px;
  display: flex;
  flex-flow: row nowrap;
  border: none;
`;

const MainMenu = styled.div`
  padding: 42px 24px;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryText100};
  transition: all 0.25s ease-in-out;
  font-size: 15px;
  background-color: ${props => props.currentMenu ? colors.lightGray : colors.white};
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
  }
`;

const SubMenuList = styled.div`
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid ${colors.mediumGray};
  margin-bottom: 12px;

  a {
    padding: 24px 40px;
    display: block;
    text-decoration: none;
    color: ${colors.primaryText100};
    transition: all 0.25s ease-in-out;
    font-size: 15px;
  }
`;

const Navigation = ({ state, actions }) => {
  const items = state.source.get('2').items;
  const [hidden, setHidden] = useState(true);
  const [currentMenu, setCurrentMenu] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentType, setCurrentType] = useState('');
  const [subMenuItems, setSubMenuItems] = useState([]);
  const subMenuSlugs = [
    {id: 1, slug: 'oferta-academica', cat: 'ofertaacadmica'},
    {id: 2, slug: 'sedes', cat: 'sede' }
  ];
  const showSubmenu = (item, e) => {
    const { title, type, url, object_slug } = item;
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
    const slug = subMenuSlugs.filter(slug => object_slug === slug.slug);
    const currentSlug = slug[0].cat;
    setSubMenuItems(state.source.get(`/${currentSlug}`).items);
  };
  return (
    <Nav>
      {items.map(item => {
        const { id, title } = item;
        return(
          <React.Fragment key={id}>
            <MainMenu
              onClick={e => showSubmenu(item, e)}
            >
              {title}
            </MainMenu>
            <Submenu hidden={hidden}>
              <h2>{currentTitle}</h2>
              {currentType === "custom" &&
                <SubMenuList>
                  {[...subMenuItems].reverse().map(item => {
                    const {id, title, link} = state.source[item.type][item.id]
                    return(
                      <Link key={id} href={link}>{title.rendered}</Link>
                    )
                  })}
                </SubMenuList>
              }
            </Submenu>
          </React.Fragment>
        )
      })}
    </Nav>
  );
};

export default connect(Navigation);