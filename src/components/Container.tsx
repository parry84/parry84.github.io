import React from 'react';
import * as styles from '@components/Container.module.scss';

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>{children}</div>
);
