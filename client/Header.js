import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
  margin-top: 5vh;
`

const MainText = styled.h1`
  font-size: 1.7rem;
  font-weight: 250;
  line-height: 2.48rem;
  color: #3b5d55;
  line-height: 2.5rem;
`

const Highlight = styled.span`
  color: '#1d403b';
  font-style: 'italic';
`

export default function Header(props) {
  const [readMore, setReadMore] = useState(false)
  return (
    <Container>
      <MainText>
        Hi, I'm{' '}
        <span style={{ color: '#1d403b', fontWeight: '400' }}>
          Ricky Rhodes
        </span>
        .
      </MainText>
      <MainText>
        A former creative professional turned{' '}
        <span style={{ color: '#1d403b', fontWeight: '400' }}>
          Fullstack Software Engineer
        </span>
        .{' '}
        <span
          style={{ fontSize: '12px' }}
          onClick={() => setReadMore(!readMore)}
        >
          Read {readMore ? 'less...' : 'more...'}
        </span>
      </MainText>
      {readMore && (
        <MainText>
          I'm currently learning at{' '}
          <span style={{ color: '#1d403b', fontWeight: '400' }}>
            Fullstack Academy
          </span>
          . In the meantime, you can check out my current work and info below.{' '}
        </MainText>
      )}
    </Container>
  )
}
