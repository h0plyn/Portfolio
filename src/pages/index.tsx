import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
import { AnimateSharedLayout, motion } from 'framer-motion';
import GlobalStyles from '../GlobalStyles';
import App from '../components';

const seo = {
  url: 'https://rickyrhodes.dev',
  title: 'Ricky Rhodes | Software Engineer',
  description: 'TypeScript, GraphQL, NodeJS, Gatsby',
  favicon: '/icon.png',
};

const Home = () => {
  return (
    <div className="home">
      <title>{seo.title}</title>
      <Helmet title={seo.title}>
        <meta name="description" content={seo.description} />
        <link rel="icon" type="image/png" sizes="32x32" href={seo.favicon} />

        <meta property="og:url" content={seo.url} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
      </Helmet>
      <GlobalStyles />
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
        }}
      >
        <AnimateSharedLayout>
          <App />
        </AnimateSharedLayout>
      </motion.div>
    </div>
  );
};

export default Home;
