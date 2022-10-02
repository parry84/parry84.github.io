import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const Notes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <StyledContainer>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/notes">Notes</Link>
          </nav>
        </header>
        <h1>Parry Notes</h1>
        <p></p>
        <ul>
          {posts
            .filter(() => false)
            .map((post) => (
              <li key={post.id}>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>{' '}
              </li>
            ))}
        </ul>
      </StyledContainer>
    </Layout>
  );
};

export default Notes;

const StyledContainer = styled(Container)`
  width: 55%;
  padding-left: 12.5%;
  max-width: 1400px;

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
