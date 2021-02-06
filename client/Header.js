import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
`

const MainText = styled.h1`
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #3b5d55;
`

export default function Header(props) {
  return (
    <Container>
      <MainText>
        Hi, I'm{' '}
        <span style={{ color: '#1d403b', fontStyle: 'italic' }}>
          Ricky Rhodes
        </span>
        .
      </MainText>
      <MainText>
        A former{' '}
        <span style={{ color: '#1d403b', fontStyle: 'italic' }}>
          creative professional
        </span>{' '}
        turned{' '}
        <span style={{ color: '#1d403b', fontStyle: 'italic' }}>
          Fullstack Software Engineer
        </span>
        .
      </MainText>
      {/* <MainText>
        I'm currently learning at{' '}
        <span style={{ color: '#1d403b', fontStyle: 'italic' }}>
          Fullstack Academy
        </span>
        . In the meantime, you can check out my current work and info below.{' '}
      </MainText> */}
    </Container>
  )
}
