'use client';

import React from 'react';

import Layout from '@common/Layout';
import Seo from '@common/SEO';
import { Container } from '@components/Container';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="404" pathname="/404" />;
