import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const HomePage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      {/* <StaticImage
        alt='Destiny 2 Lightfall guardians standing and trying to understand The Veil'
        src='https://cdn.mos.cms.futurecdn.net/48JxNqomTMVC894zPAtxFP.jpg'
      /> */}
      <StaticImage
        alt='Destiny 2 Lightfall header image stored locally'
        src='../images/d2.png'
      />
    </Layout>
  );
};

export const Head = () => <Seo title='Home Page' />;

export default HomePage;
