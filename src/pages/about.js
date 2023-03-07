import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! My name is weebs and I'm building this site for the Gatsby
        tutorial.
      </p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
