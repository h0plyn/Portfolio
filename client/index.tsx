import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../src/GlobalStyles';
import App from '../src/components';
import { motion, AnimateSharedLayout } from 'framer-motion';

function Root() {
  return (
    <Router>
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
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
