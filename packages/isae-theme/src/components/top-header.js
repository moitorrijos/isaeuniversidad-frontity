import React from 'react';
import { styled, connect } from 'frontity';
import Placeholder from './icons/placeholder';
import colors from '../styles/colors';
import Link from './link';

const TopHeaderContainer = styled.div`
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  padding: 10px 2rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
`;

const TopContent = styled.div`
  margin-left: 180px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: ${colors.white};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const TopMenu = styled.nav`
  justify-self: end;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: ${colors.white};
  display: block;
  padding: 10px 24px;
  text-decoration-color: ${colors.white};
`;

const MainButton = styled(Link)`
  background-color: ${colors.secondaryBlue};
  color: ${colors.white};
  margin-left: 12px;
  border-radius: 8px;
  text-decoration: none;
  padding: 12px 24px;
`;

const TopHeader = ({ state }) => {
  const items = state.source.get('47').items;
  return (
    <TopHeaderContainer>
      <TopContent>
        <Placeholder />
        Ciudad de Panamá
      </TopContent>
      <TopMenu>
        {items.map(item => {
          const { id, title, url, classes } = item;
          if (classes === 'primary-button') {
            return (
              <MainButton key={id} link={url}>{title}</MainButton>
            ) 
          } else {
            return (
              <StyledLink key={id} link={url}>{title}</StyledLink> 
            );
          }
        })}
      </TopMenu>
    </TopHeaderContainer>
  );
}

export default connect(TopHeader);