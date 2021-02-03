import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './GlobalStyles'
import LinkBar from './LinkBar'
import Header from './Header'
import Projects from './Projects'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <LinkBar />
      <Projects />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
