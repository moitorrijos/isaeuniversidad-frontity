import React from 'react';
import { styled } from 'frontity';
import Link from '../link';
import Logo from '../icons/logo';
import LogoMobile from '../icons/logo-mobile';

const LogoContainer = styled.div`
  width: 100%;
  max-width: 360px;
  padding: 20px 20px 0;
  margin-top: -50px;

  @media (max-width: 834px) {
    margin-top: 0;
    width: 360px;
    padding: 1rem 0;
  }

  @media (max-width: 600px) {
    width: 200px;
  }
`;

const DesktopContainer = styled.div`
  @media (max-width: 834px) {
    display: none;
  }
`;

const MobileContainer = styled.div`
  @media (min-width: 835px) {
    display: none;
  }
`;


const SiteLogo = () => (
  <LogoContainer>
    <Link link="/">
      <DesktopContainer>
        <Logo />
      </DesktopContainer>
      <MobileContainer>
        <LogoMobile />
      </MobileContainer>
    </Link>
  </LogoContainer>
)

export default SiteLogo;