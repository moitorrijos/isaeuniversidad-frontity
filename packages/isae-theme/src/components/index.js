import React from 'react';
import { Global, css, connect, styled, Head } from 'frontity';
// import Switcher from '@frontity/components/switch';
import Title from './title'
import Header from './header';
import Footer from './footer';

const globalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
  }
`

const Theme = ({ state }) => {
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <html lang="es" />
      </Head>
      <Global styles={globalStyles} />
      <Header />
      <Footer />
    </>
  )
}

export default connect(Theme)