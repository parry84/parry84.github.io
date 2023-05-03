'use client';

import React from 'react';
import { graphql } from 'gatsby';
import NoteLayout from '@common/NoteLayout';
import ShareLinks from '@common/Share';
import Seo from '@common/Seo';

import * as styles from './Note.module.scss';
import { ImageDataLike } from 'gatsby-plugin-image';

type Props = {
  data: {
    note: {
      frontmatter: { title: string; slug: string; caption: string; dateUpdated: string };
      html: string;
    };
    artHero: {
      childImageSharp: { gatsbyImageData: ImageDataLike | null };
    };
  };
};

export default function Note({ data }: Props) {
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
      <div className={styles.socialFooter}>
        Milano, {new Date(Date.parse(dateUpdated)).toLocaleDateString()}
        <ShareLinks note={note} />
      </div>
    </NoteLayout>
  );
}

export const Head = ({ data }: Props) => {
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
