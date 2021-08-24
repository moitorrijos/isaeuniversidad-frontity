import React from 'react';
import { styled, connect } from 'frontity';
import FooterLogo from '../icons/footer-logo';
import Link from "@frontity/components/link";
import colors from '../../styles/colors';
import MainContainer from '../main-container';
import Grid from '../grid';

const FooterContainer = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
  font-size: 15px;
`;

const FooterItem = styled.div`
  max-width: 260px;
`;

const FooterTitle = styled.h3`
  font-size: 22px;
  color: ${colors.white};
`;

const FooterNav = styled.nav``;

const Paragraph = styled.p`
  color: ${colors.white};
  font-size: 14px;
`;

const FooterLink = styled(Link)`
  display: block;
  color: ${colors.white};
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: all 0.25s ease-in-out;

  &:hover {
    padding-left: 4px;
  }
`;

const FooterCopyright = styled.div`
  background-color: ${colors.primaryBlue600};
  color: ${colors.white};
  padding: 14px 4rem;
  p {
    text-align: center;
    margin: 0;
    font-size: 14px;
  }
`;

const Footer = ({ state }) => {
  const menu_vida_uni = state.source.get('48').items;
  const menu_sobre_isae = state.source.get('54').items;
  const branches = state.source.get('/sede').items;
  
  return (
    <>
      <FooterContainer>
        <MainContainer>
          <Grid columns="4" gap="20px">
            <FooterItem>
              <FooterLogo />
              <Paragraph>
                Teléfono: +507 278-1432 / 278-1444<br />
                WhatsApp: +507 6548-7314<br />
                Correo: mercadeo@isaeuniversidad.ac.pa
              </Paragraph>
              {/* <Paragraph>
                (+507) 278-1432 / 278-1444
                info@isaeuniversidad.ac.pa
              </Paragraph> */}
            </FooterItem>
            <FooterItem>
              <FooterTitle>Vida Unviersitaria</FooterTitle>
              <FooterNav>
                {menu_vida_uni.map( item => {
                  const { id, title, url } = item
                  return (
                    <FooterLink key={id} link={url}>{title}</FooterLink>
                  )
                })}
              </FooterNav>
            </FooterItem>
            <FooterItem>
              <FooterTitle>Sedes</FooterTitle>
              <FooterNav>
                {[...branches].reverse().map( branch => {
                  const data = state.source[branch.type][branch.id];
                  const { id, link, title } = data;
                  return (
                    <FooterLink key={id} link={link}>{title.rendered}</FooterLink>
                  )
                })}
              </FooterNav>
            </FooterItem>
            <FooterItem>
              <FooterTitle>Sobre ISAE</FooterTitle>
              <FooterNav>
                {menu_sobre_isae.map( item => {
                  const { id, title, url } = item
                  return (
                    <FooterLink key={id} link={url}>{title}</FooterLink>
                  )
                })}
              </FooterNav>
            </FooterItem>
          </Grid>
        </MainContainer>
      </FooterContainer>
      <FooterCopyright>
        <p>&copy; {new Date().getFullYear()} ISAE Universidad todos los derechos reservados.</p>
      </FooterCopyright>
    </>
  )
}

export default connect(Footer);