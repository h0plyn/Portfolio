import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Header from './Header';
import Projects from './Projects';
import currentProjects from './projectData';
import Shape from './Shape';
import History from './History';
import LinkBar from './LinkBar';
import Footer from './Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
      >
        <Shape />
        <LinkBar />
        <Header />
        <Projects data={currentProjects} />
        <History data={currentProjects} />
        <Footer />
      </motion.div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
