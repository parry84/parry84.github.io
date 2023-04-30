'use client';

import React from 'react';
import Seo from '@common/SEO';
import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import TechRadar from '@common/TechRadar';
import { Container } from '@components/Container';

const ParryRadar = () => {
  return (
    <Layout>
      <header>
        <Navbar />
      </header>
      <Container>
        <h1>Parry Radar</h1>
        <TechRadar />
      </Container>
    </Layout>
  );
};

export default ParryRadar;

export const Head = () => <Seo title="Radar" pathname="/radar" />;
