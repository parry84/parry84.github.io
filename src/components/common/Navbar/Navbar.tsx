import React from 'react';

import { Link } from 'gatsby';

import * as styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/notes/">Notes</Link>
      <a href="https://war.ukraine.ua/support-ukraine/">Support Ukraine 🇺🇦</a>
    </nav>
  );
}
