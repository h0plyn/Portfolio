import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

function App() {
  const [info, setInfo] = useState(false)

  return (
    <div className="container">
      <Home />
      <div className="flex">
        <a
          className="icon fab fa-github-square fa-6x"
          href="https://github.com/h0plyn"
          target="blank"
        ></a>
        <a
          className="icon fab fa-linkedin fa-6x"
          href="https://www.linkedin.com/in/rickyrhodes/"
          target="blank"
        ></a>
        <a
          className="icon fab fa-twitter-square fa-6x"
          href="https://twitter.com/h0plyn"
          target="blank"
        ></a>
        <a
          className="icon fab fa-instagram-square fa-6x"
          alt="Instagram"
          href="https://www.instagram.com/rickyrhodes/"
          target="blank"
        ></a>
        <div
          className="icon fas fa-info-circle fa-6x"
          alt="Information"
          onClick={() => setInfo(!info)}
        ></div>
      </div>
      <div className="flex">
        {info ? (
          <div className="info">
            <p className="text">
              Ricky Rhodes was raised in a small farm town outside of Cleveland,
              OH. When not reading documentation, you can find him fly fishing
              or walking his giant Newfoundland dog. He is currently focusing on
              Node, Express, React, Postgres, Firebase, React Native, Solidity,
              and Python.
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
