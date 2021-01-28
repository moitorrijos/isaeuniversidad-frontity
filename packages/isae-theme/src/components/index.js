import React from 'react';
import { Global, css, connect, Head } from 'frontity';
import Switch from "@frontity/components/switch";
import Title from './general/title'
import Header from './general/header';
import HomePage from './home-page';
import Footer from './general/footer';

const globalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4 {
    margin: 2rem 0;
    line-height: 1.1;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
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