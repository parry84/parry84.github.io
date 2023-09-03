'use client';

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import NoteLayout from '@common/NoteLayout';
import Seo from '@common/Seo';

type Note = {
  id: string;
  frontmatter: {
    title: string;
    slug: string;
    order: number;
  };
};

const Notes = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { visible: { eq: true } } }
        sort: [{ frontmatter: { order: DESC } }]
      ) {
        nodes {
          id
          frontmatter {
            title
            slug
          }
        }
      }
      art_quijote: file(sourceInstanceName: { eq: "art" }, name: { eq: "quijote" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const notes = data.allMarkdownRemark.nodes;

  const hero = {
    gatsbyImageData: data.art_quijote.childImageSharp.gatsbyImageData,
    caption: '',
  };

  return (
    <NoteLayout title="Parry Notes" hero={hero}>
      <section>
        <p className="subtitle">
          La felicità personale e il bene comune sono determinati dalla nostra capacità di pensare
          profondamente e razionalmente.
        </p>
      </section>
      <section>
        <ol>
          {notes.map((note: Note) => (
            <li key={note.id}>
              <Link to={note.frontmatter.slug}>{note.frontmatter.title}</Link>
            </li>
          ))}
        </ol>
      </section>
    </NoteLayout>
  );
};

export default Notes;

export const Head = () => (
  <Seo
    title="Parry Notes"
    description="A collection of thoughts on software industry and personal life."
    pathname="/notes"
  />
);
