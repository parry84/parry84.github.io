import React from 'react';
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
      <Container>
        <h1>Parry Notes</h1>
        <p></p>
        <Link to="/">Go back to the homepage</Link>
        <ul>
          {posts
            .filter(() => false)
            .map((post) => (
              <li key={post.id}>
                <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>{' '}
              </li>
            ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default Notes;
