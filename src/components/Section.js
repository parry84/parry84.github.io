import React from 'react';
import * as styles from '@components/Section.module.scss';

export const Section = (props) => <div className={styles.section}>{props.children}</div>;
