import React from 'react';
import { styled, connect } from 'frontity';
import FooterLogo from './icons/footer-logo';
import Link from './link';
import colors from '../styles/colors';
import MainContainer from './main-container';
import Grid from './grid';

const FooterContainer = styled.footer`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: ${colors.primaryBlue};
  color: ${colors.white};
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
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  display: block;
  color: ${colors.white};
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Footer = ({ state }) => {
  const vida_uni = state.source.get('48').items;
  const sobre_isae = state.source.get('54').items;
  const sedes = state.source.get('/sede').items;
  
  return (
    <FooterContainer>
      <MainContainer>
        <Grid columns="4" gap="20px">
          <FooterItem>
            <FooterLogo />
            <Paragraph>
              {state.frontity.description}
            </Paragraph>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Vida Unviersitaria</FooterTitle>
            <FooterNav>
              {vida_uni.map( item => {
                const { id, title, url } = item
                return (
                  <StyledLink key={id} link={url}>{title}</StyledLink>
                )
              })}
            </FooterNav>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Sedes</FooterTitle>
            <FooterNav>
              {[...sedes].reverse().map( sede => {
                const data = state.source[sede.type][sede.id];
                const { id, link, title } = data;
                return (
                  <StyledLink key={id} link={link}>{title.rendered}</StyledLink>
                )
              })}
            </FooterNav>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Sobre ISAE</FooterTitle>
            <FooterNav>
              {sobre_isae.map( item => {
                const { id, title, url } = item
                return (
                  <StyledLink key={id} link={url}>{title}</StyledLink>
                )
              })}
            </FooterNav>
          </FooterItem>
        </Grid>
      </MainContainer>
    </FooterContainer>
  )
}

export default connect(Footer);