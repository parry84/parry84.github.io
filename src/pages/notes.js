import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const Notes = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx {
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

  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Container>
        <h1>Parry Notes</h1>
        <p></p>
        <Link to="/">Go back to the homepage</Link>
        <ul>
          {posts.map((post) => (
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
