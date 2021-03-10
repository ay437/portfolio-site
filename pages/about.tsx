import React from 'react';
import AboutLayout from '../components/Layouts/AboutLayout/AboutLayout';
import Layout from '../components/Layouts/Layout/Layout';

function About() {
  return (
    <Layout title="Content page">
      <AboutLayout name="about me" />
    </Layout>
  );
}

export default About;
