import React from 'react'
import styled from 'styled-components'
import { device } from './device'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
  background-color: #ecdccb;
`

const MainText = styled.h1`
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #3b5d55;
`

const Box = styled.div`
  background-color: #3b5d55;
  height: 350px;
  width: 100%;
  margin-bottom: 1rem;
`

export default function Projects(props) {
  return (
    <Container>
      <Box />
      <Box />
      <Box />
    </Container>
  )
}
