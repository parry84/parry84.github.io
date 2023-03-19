import React from 'react';

import { Link } from 'gatsby';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/notes">Notes</Link>
      <Link to="https://war.ukraine.ua/">Support Ukraine 🇺🇦</Link>
    </nav>
  );
}
