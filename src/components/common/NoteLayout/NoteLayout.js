import React from 'react';
import styled from 'styled-components';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import ExternalLink from '../ExternalLink';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function NodeLayout({ title, hero, children }) {
  return (
    <Layout>
      <StyledContainer>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </nav>
        </header>
        <article>
          <h1>{title}</h1>
          <section>
            <p>
              <label class="margin-toggle" for="sidenote-7">
                ⊕
              </label>
              <input class="margin-toggle" id="sidenote-7" type="checkbox" />
              <span class="marginnote">
                <GatsbyImage image={hero.gatsbyImageData} backgroundColor="00ff00" alt="" />
                {hero.caption}
              </span>
            </p>
            {children}
          </section>
        </article>
        <footer>
          <div class="credits" style={{ paddingBottom: 50, paddingTop: 50 }}>
            CC BY-ND | Potete lasciare suggerimenti aprendo una Issue o una Pull Request su{' '}
            <ExternalLink href="https://github.com/parry84/parry84.github.io/tree/master/src/notes">
              GitHub
            </ExternalLink>
            .
          </div>
        </footer>
      </StyledContainer>
    </Layout>
  );
}

const StyledContainer = styled(Container)`
  width: 87.5%;
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

  p,
  footer,
  table,
  h2,
  h3,
  ul {
    width: 55%;
  }

  hr {
    display: block;
    height: 1px;
    width: 55%;
    border: 0;
    margin: 1em 0;
    padding: 0;

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

  @media (max-width: 760px) {
    p,
    footer,
    table,
    h2,
    h3,
    ul {
      width: 100%;
    }
  }
`;