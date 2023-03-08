import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! My name is kelly and I'm building this site for the Gatsby
        tutorial.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title='About Me' />;

export default AboutPage;
