import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const OutdoorLog = () => (
  <Layout>
    <Container>
      <h1>Contact me</h1>
      <Link to="/">Go back to the homepage</Link>
      <h2>Run the following program to generate my contact information:</h2>
      <SyntaxHighlighter language="racket" style={github}>
{`#lang racket
(define A (char->integer #\\A))
(define Z (char->integer #\\Z))
(define a (char->integer #\\a))
(define z (char->integer #\\z))
 
(define (rotate c)
  (define cnum (char->integer c))
  (define (shift base) (integer->char (+ base (modulo (+ -1 (- cnum base)) 26))))
  (cond [(<= A cnum Z) (shift A)]
        [(<= a cnum z) (shift a)]
        [else c]))
 
(define (caesar s)
  (list->string (for/list ([c (in-string s)]) (rotate c))))

(caesar "qbssz84@hnbjm.dpn")`}
      </SyntaxHighlighter>
      <h2>My PGP key</h2>
      <pre>
{`-----BEGIN PGP PUBLIC KEY BLOCK-----

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
=/FPo
-----END PGP PUBLIC KEY BLOCK-----`}
      </pre>
    </Container>
  </Layout>
);

export default OutdoorLog;
