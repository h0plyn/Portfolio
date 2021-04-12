import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header';
import Projects from './components/Projects';
import currentProjects from './components/projectData';
import Shape from './components/Shape';
import History from './components/History';
import LinkBar from './components/LinkBar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { ProjectProvider, projects } from './context/ProjectContext';
import { HistoryProvider, history } from './context/HistoryContext';

function App() {
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
            <Shape />
            <LinkBar />
            <Header />
            <Projects data={currentProjects} />
            <History data={currentProjects} />
            <Footer />
          </motion.div>
        </HistoryProvider>
      </ProjectProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
