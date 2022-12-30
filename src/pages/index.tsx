import React from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import GlobalStyles from '../GlobalStyles';
import App from '../components';
import './styles.css';

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
        }}>
        <AnimateSharedLayout>
          <App />
        </AnimateSharedLayout>
      </motion.div>
    </div>
  );
};

export default Home;
export { Head } from '../lib/head';
