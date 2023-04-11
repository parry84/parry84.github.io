import React from 'react';
import * as styles from '@components/Section.module.scss';

export const Section = (props) => (
  <section className={styles.section} data-accent={props.accent}>
    {props.children}
  </section>
);
