import React from 'react';

import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/notes">Notes</Link>
      <a href="https://war.ukraine.ua/support-ukraine/">Support Ukraine 🇺🇦</a>
    </nav>
  );
}
