import React from 'react';
import styled from 'styled-components';
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
      <StyledContainer>
        <h1 style={{ paddingBottom: 50, paddingTop: 50 }}>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledContainer>
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

const StyledContainer = styled(Container)`
  width: 55%;
  padding-left: 12.5%;
  max-width: 1400px;
`;
