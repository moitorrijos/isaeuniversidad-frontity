import React from 'react';
import { styled } from 'frontity';
import colors from '../styles/colors';
import { effects } from '../styles/effects';
import Link from "@frontity/components/link";

const Button = styled(Link)`
  padding: 1rem 2.5rem;
  background-color: ${colors.primaryBlueBright};
  color: ${colors.white};
  display: inline-block;
  margin-top: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: ${effects.transform};
    box-shadow: ${effects.boxShadow};
  }
`;

const PrimaryButton = ({link, children}) => {
  return(
    <Button link={link}>
      {children}
    </Button>
  );
}

export default PrimaryButton;