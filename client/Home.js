import React, { useState } from 'react'
import Info from './Info'

export default function Home() {
  const [info, setInfo] = useState(false)

  return (
    <div className="main-text">
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
        <div className="flex">{info ? <Info /> : ''}</div>
      </div>
    </div>
  )
}
