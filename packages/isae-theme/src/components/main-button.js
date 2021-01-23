import React from 'react';
import Link from "@frontity/components/link";
import { styled } from 'frontity';
import RightArrowCircle from './icons/right-arrow-circle';
import { effects } from '../styles/effects';

const Styledlink = styled(Link)`
  background-color: ${props => props.background};
  color: ${props => props.color};
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  transition: all 0.25s ease-in-out;

  svg {
    margin-left: 12px;
  }

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const MainButton = ({ background, color, link, children }) => {
  return (
    <Styledlink
      background={background}
      color={color}
      link={link}
    >
      {children}
      <RightArrowCircle color={color} />
    </Styledlink>
  );
}

export default MainButton;