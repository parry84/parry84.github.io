import React from 'react';
import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import ExternalLink from '../ExternalLink';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

import * as styles from './NoteLayout.module.scss';

type Props = {
  title: string;
  hero: {
    gatsbyImageData: ImageDataLike | null;
    caption: string;
  };
  children: React.ReactNode;
};

export default function NodeLayout({ title, hero, children }: Props) {
  const image = getImage(hero.gatsbyImageData);
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <div className={styles.tufteLayout}>
        <article>
          <h1>{title}</h1>
          {image && (
            <section>
              <p>
                <label className="margin-toggle" htmlFor="sidenote-7">
                  ⊕
                </label>
                <input className="margin-toggle" id="sidenote-7" type="checkbox" />
                <span className="marginnote">
                  <GatsbyImage image={image} backgroundColor="00ff00" alt="" />
                  {hero.caption}
                </span>
              </p>
            </section>
          )}
          {children}
        </article>
        <footer>
          <div className="credits" style={{ paddingBottom: 50, paddingTop: 50 }}>
            CC BY-ND | Potete lasciare suggerimenti aprendo una Issue o una Pull Request su{' '}
            <ExternalLink href="https://github.com/parry84/parry84.github.io/tree/master/src/notes">
              GitHub
            </ExternalLink>
            .
          </div>
        </footer>
      </div>
    </Layout>
  );
}
