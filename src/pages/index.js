'use client';

import React from 'react';
import Layout from '@common/Layout';
import Seo from '@common/SEO';
import Header from '@sections/Header';
import About from '@sections/About';
import Social from '@sections/Social';
import Footer from '@sections/Footer';

const HomePage = () => (
  <Layout>
    <Header />
    <About />
    <Social />
    <Footer />
  </Layout>
);

export default HomePage;

export const Head = () => <Seo />;
