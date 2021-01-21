import React from 'react';
import { Global, css, connect, styled, Head } from 'frontity';
import Switch from "@frontity/components/switch";
import Title from './title'
import Header from './header';
import HomePage from './home-page';
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
  const data = state.source.get(state.router.link);
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
        <html lang="es" />
      </Head>
      <Global styles={globalStyles} />
      <Header />
      <Switch>
        <HomePage when={data.isHome} />
      </Switch>
      <Footer />
    </>
  )
}

export default connect(Theme)