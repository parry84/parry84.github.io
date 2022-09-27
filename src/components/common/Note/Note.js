import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@common/Layout';
import { Container } from '@components/global';

export default function PageTemplate({ data }) {
  const {
    note: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <Layout>
      <Container>
        <h1 style={{ paddingBottom: 50, paddingTop: 50 }}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    note: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
