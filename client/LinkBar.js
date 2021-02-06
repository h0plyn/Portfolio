import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Icon = styled.a`
  color: #1d403b;
  text-decoration: none;
  padding: 0.5rem;
`

export default function LinkBar() {
  const [info, setInfo] = useState(false)

  return (
    <Container>
      <Icon
        className="icon fab fa-github-square fa-2x"
        href="https://github.com/h0plyn"
        target="blank"
      ></Icon>

      <Icon
        className="icon fab fa-linkedin fa-2x"
        href="https://www.linkedin.com/in/rickyrhodes/"
        target="blank"
      ></Icon>
      <Icon
        className="icon fab fa-twitter-square fa-2x"
        href="https://twitter.com/h0plyn"
        target="blank"
      ></Icon>
      <Icon
        className="icon fab fa-instagram-square fa-2x"
        alt="Instagram"
        href="https://www.instagram.com/rickyrhodes/"
        target="blank"
      ></Icon>
      {/* <Icon
        className="icon fas fa-info-circle fa-2x"
        alt="Information"
        onClick={() => setInfo(!info)}
      ></Icon> */}
    </Container>
    // <div className="flex">
    //   {info
    //     ? "I'm baby lyft occupy tilde jean shorts godard. Hashtag plaid truffaut, you probably haven't heard of them cardigan poke vegan. Subway tile roof party you probably haven't heard of them viral, intelligentsia mustache next level semiotics cornhole tote bag gluten-free tumeric hashtag. Photo booth butcher tacos pickled trust fund.Dummy text? More like dummy thicc text, amirite?"
    //     : ''}
    // </div>
  )
}
