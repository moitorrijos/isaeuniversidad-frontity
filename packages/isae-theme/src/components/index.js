import React from 'react';
import { Global, css, connect, Head } from 'frontity';
import colors from '../styles/colors';
import Title from './general/title';
import Header from './general/header';
import Switch from "@frontity/components/switch";
import Loading from './loading';
import HomePage from './home-page';
import AcademicsPage from './academics-page';
import BranchPage from './branch-page';
import CareerPage from './pages/career-page';
import InvestigationsPage from './pages/investigations-page';
import UniversityLifePage from './pages/university-life-page';
import PostPage from './pages/post-page';
import Footer from './general/footer';
import Page from './page';

const globalStyles = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 'DM Sans', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    padding: 0;
    margin: 0;
    color: ${colors.primaryText50};
  }

  h1, h2, h3, h4 {
    margin: 2rem 0;
    line-height: 1.1;
    font-weight: 500;
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

  a {
    color: ${colors.primaryBlueBright};
  }

  button {
    appearance: none;
    background: none;
    border: none;
    outline: 0;
    font-size: 1rem;
  }

  figure {
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
        <Loading when={data.isFetching} />
        <HomePage when={data.isHome} />
        <AcademicsPage when={data.isOfertaacadmica} />
        <BranchPage when={data.isSede} />
        <CareerPage when={data.isCarrera} />
        <UniversityLifePage when={data.isVidauniversitaria} />
        <InvestigationsPage when={data.isInvestigacion} />
        <Page when={data.isPage} />
        <PostPage when={data.isPost} />
      </Switch>
      <Footer />
    </>
  )
}

export default connect(Theme)