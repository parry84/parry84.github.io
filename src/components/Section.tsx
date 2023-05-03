import React from 'react';
import * as styles from '@components/Section.module.scss';

type Props = {
  id: string;
  accent?: 'primary';
  children: React.ReactNode;
};

export const Section = ({ accent, children }: Props) => (
  <section className={styles.section} data-accent={accent}>
    {children}
  </section>
);
