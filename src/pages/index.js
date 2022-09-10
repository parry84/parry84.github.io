import React from 'react';

import Layout from '@common/Layout';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Brands />
    <Footer />
  </Layout>
);

export default IndexPage;
