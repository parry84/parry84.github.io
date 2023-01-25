import React from 'react';
import { graphql } from 'gatsby';
import NoteLayout from '@common/NoteLayout';
import Seo from '@common/SEO';

export default function PageTemplate({ data }) {
  if (data.artHero == null) {
    data.artHero = {
      childImageSharp: {
        gatsbyImageData: null
      }
    }
  }

  const {
    note: {
      frontmatter: { title, caption },
      html,
    },
    artHero: {
      childImageSharp: {
        gatsbyImageData
      }
    }
  } = data;

  const hero = {
    gatsbyImageData,
    caption
  }

  return (
    <NoteLayout title={title} hero={hero}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </NoteLayout>
  );
}

export const Head = ({ data }) => {
  const {
    note: {
      frontmatter: { title, slug },
    },
  } = data;

  return <Seo title={title} pathname={`/notes/${slug}`} />;
};

export const query = graphql`
  query ($id: String!, $slug: String!) {
    note: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        caption
      }
    }
    artHero: file(sourceInstanceName: { eq: "art" }, name: { eq: $slug }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;
