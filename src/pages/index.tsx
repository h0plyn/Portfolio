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
  favicon: '',
  image: "https://dl.dropboxusercontent.com/s/qp7m0pjsrlf3w88/meta.png"
};

const Home = () => {
  return (
    <div className="home">
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
export { Head } from './utils/head'
