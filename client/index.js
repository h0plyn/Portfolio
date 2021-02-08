import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Projects from './Projects'
import currentProjects from './projectData'
import Shape from './Shape'
import History from './History'
import Footer from './Footer'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Shape />
      <Header />
      <Projects data={currentProjects} />
      <History data={currentProjects} />
      <Footer />
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
