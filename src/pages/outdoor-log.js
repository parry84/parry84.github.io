import React from 'react';
import { Link } from 'gatsby';
import Layout from '@common/Layout';
import Seo from '@common/SEO';
import { Container } from '@components/global';
import styled from 'styled-components';

const OutdoorLog = () => (
  <Layout>
    <StyledContainer>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/notes">Notes</Link>
        </nav>
      </header>
    </StyledContainer>
    <Container>
      <h1>The Outdoor Log</h1>
      <p></p>
      <iframe
        title="outdoorLog"
        height="1380"
        width="1300"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTyxATkXnQDVvTmuTtR3ATMzmt3pDf5w12ZHxRAUkFTazswY3cXlS7Jn9vXGrBARfB8qmC7G7m_CSCV/pubhtml?gid=1918999660&amp;single=true&amp;widget=false&amp;headers=false&amp;gridlines=false&amp;range=A1:L60"
      ></iframe>
    </Container>
  </Layout>
);

export default OutdoorLog;

export const Head = () => <Seo title="The Outdoor Log" pathname="/outdoor-log" />;

const StyledContainer = styled(Container)`
  width: 55%;
  padding-left: 12.5%;
  max-width: 1400px;

  @media (max-width: 760px) {
    width: 100%;
    padding-left: 10;
    padding-right: 10;

    p {
      width: 100%;
    }
  }

  /*
  ** Adapted from https://github.com/clayh53/tufte-jekyll/blob/master/css/tufte.scss
  */

  body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body > header,
  body > footer {
    flex: none;
  }

  body > article {
    flex: 1 0 auto;
  }

  header > nav {
    padding: 3rem 3rem 0 0;
    font-size: 1.3rem;
    font-family: 'Gill Sans';
  }

  @media (max-width: 760px) {
    header > nav {
      padding-top: 2rem;
      padding-right: 0px;
    }
  }

  header > nav a {
    display: block;
    float: right;
    padding: 0;
    margin: 0 2rem 0 0;

    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;

    /* Needed to make the links clickable. */
    position: relative;
    z-index: 1;
  }

  header > nav a:first-child {
    margin-right: 0;
  }

  header nav a:link {
    background-image: none;
  }

  footer {
    width: 95%;
    font-size: 1.1rem;
  }

  footer code {
    font-size: 0.9rem;
  }

  footer a code {
    font-size: 0.9rem;
  }

  footer hr {
    display: block;
    width: 100%;
    border: 0;
    margin: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
    background-image: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
    background-image: -ms-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
    background-image: -o-linear-gradient(
      left,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }

  footer .credits {
    text-align: center;
    padding: 1.4rem 0 1.2rem 0;
  }
`;
