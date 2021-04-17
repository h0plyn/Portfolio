import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import App from './components';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { ProjectProvider, projects } from './context/ProjectContext';
import { HistoryProvider, history } from './context/HistoryContext';

function Root() {
  return (
    <Router>
      <ProjectProvider value={projects}>
        <HistoryProvider value={history}>
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
        </HistoryProvider>
      </ProjectProvider>
    </Router>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
