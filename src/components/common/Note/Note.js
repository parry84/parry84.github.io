import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import NoteLayout from '@common/NoteLayout';
import ShareLinks from '@common/Share';
import Seo from '@common/SEO';

export default function PageTemplate({ data }) {
  if (data.artHero == null) {
    data.artHero = {
      childImageSharp: {
        gatsbyImageData: null,
      },
    };
  }

  const {
    note: {
      frontmatter: { title, slug, caption, dateUpdated },
      html,
    },
    artHero: {
      childImageSharp: { gatsbyImageData },
    },
  } = data;

  const hero = {
    gatsbyImageData,
    caption,
  };

  const note = {
    excerpt: '',
    title: title,
    url: `https://parry84.github.io/notes/${slug}`,
  };

  return (
    <NoteLayout title={title} hero={hero}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <SocialFooter>
        Milano, {new Date(Date.parse(dateUpdated)).toLocaleDateString()}
        <ShareLinks note={note} />
      </SocialFooter>
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
        dateUpdated
      }
    }
    artHero: file(sourceInstanceName: { eq: "art" }, name: { eq: $slug }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`;

const SocialFooter = styled.div`
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
