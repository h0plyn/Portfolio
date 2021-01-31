import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

function App() {
  return (
    <div class="container">
      <div class="flex">
        <h1>RICKY RHODES</h1>
        <div class="flex">
          <a
            class="icon fab fa-github-square fa-2x"
            href="https://github.com/h0plyn"
            target="blank"
          ></a>
          <a
            class="icon fab fa-linkedin fa-2x"
            href="https://www.linkedin.com/in/rickyrhodes/"
            target="blank"
          ></a>
          <a
            class="icon fab fa-twitter-square fa-2x"
            href="https://twitter.com/h0plyn"
            target="blank"
          ></a>
          <a
            class="icon fab fa-instagram-square fa-2x"
            alt="Instagram"
            href="https://www.instagram.com/rickyrhodes/"
            target="blank"
          ></a>
          <span
            class="icon fas fa-info-circle fa-2x"
            alt="Information"
            onclick="box()"
          ></span>
        </div>
        <div class="info">
          Ricky Rhodes was raised in a small farm town outside of Cleveland, OH.
          When not reading documentation, you can find him fly fishing or
          walking his giant Newfoundland dog. He is currently learning Fullstack
          JavaScript with a focus on Vanilla JavaScript, Node.js. React.js, and
          SQL.
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
