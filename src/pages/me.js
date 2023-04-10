'use client';

import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const MePage = () => (
  <Layout>
    <Container>
      <h1>Me</h1>
      <p>
        🎯 Personal roadmap Technical: - Haskell: learn STM, Lenses, GADT, Effects, Generic
        Programming - Learn Smalltalk for OOP - Learn Racket and Common Lisp - Read Structure and
        Interpretation of Programs Non technical - DELE B2 - Read Cien anos del soledad
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
);

export default MePage;
