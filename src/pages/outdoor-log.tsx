'use client';

import React from 'react';
import Navbar from '@common/Navbar';
import Layout from '@common/Layout';
import Seo from '@common/Seo';
import { Container } from '@components/Container';

const OutdoorLog = () => (
  <Layout>
    <header>
      <Navbar />
    </header>
    <Container>
      <h1>The Outdoor Log</h1>
      <p></p>
      <iframe
        title="outdoorLog"
        height="1380"
        width="1300"
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTyxATkXnQDVvTmuTtR3ATMzmt3pDf5w12ZHxRAUkFTazswY3cXlS7Jn9vXGrBARfB8qmC7G7m_CSCV/pubhtml?gid=1918999660&amp;single=true&amp;widget=false&amp;headers=false&amp;gridlines=false&amp;range=A1:L60"
      ></iframe>
    </Container>
  </Layout>
);

export default OutdoorLog;

export const Head = () => <Seo title="The Outdoor Log" pathname="/outdoor-log" />;
