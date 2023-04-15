import React from 'react';

import Navbar from '@common/Navbar';

import Layout from '@common/Layout';
import ExternalLink from '../ExternalLink';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './NoteLayout.module.scss';

export default function NodeLayout({ title, hero, children }) {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <div className={styles.tufteLayout}>
        <article>
          <h1>{title}</h1>
          <section>
            <p>
              <label className="margin-toggle" htmlFor="sidenote-7">
                ⊕
              </label>
              <input className="margin-toggle" id="sidenote-7" type="checkbox" />
              <span className="marginnote">
                {hero.caption}
              </span>
            </p>
          </section>
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
