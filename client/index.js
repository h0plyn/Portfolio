import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './GlobalStyles'
import LinkBar from './LinkBar'
import Header from './Header'
import Projects from './Projects'
import currentProjects from './projectData'
import Shape from './Shape'

function App() {
  return (
    <>
      <GlobalStyles />
      <Shape />
      <Header />
      <Projects data={currentProjects} />
      <LinkBar />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
