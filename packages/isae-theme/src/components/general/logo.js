import React from 'react';
import { styled } from 'frontity';
import Link from '../link';
import Logo from '../icons/logo';

const LogoContainer = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 20px 20px 0;
  margin-top: -50px;

  @media (max-width: 835px) {
    margin-top: 0;
    width: 360px;
  }

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const SiteLogo = () => (
  <LogoContainer>
    <Link link="/">
      <Logo />
    </Link>
  </LogoContainer>
)

export default SiteLogo;