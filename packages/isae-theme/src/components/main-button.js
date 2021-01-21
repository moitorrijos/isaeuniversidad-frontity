import React from 'react';
import Link from "@frontity/components/link";
import { styled } from 'frontity';
import RightArrowCircle from './icons/right-arrow-circle';

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
    transform: scale(1.01) translateY(-1px);
    box-shadow: 0px 32px 80px rgba(10, 31, 68, 0.06), 0px 32px 48px rgba(50, 50, 71, 0.05)
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