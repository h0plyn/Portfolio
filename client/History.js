import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecdccb;
  width: 90%;
  margin: 1rem;
`

const Title = styled.h1`
  color: #1d403b;
  font-size: 1.2rem;
  margin: 0;
`

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
`
const ExpHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: space-between;
`

const Experience = styled.h1`
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #1d403b;
  margin-bottom: 1rem;
`
const Description = styled.p`
  color: #3b5d55;
`

export default function History(props) {
  const { history } = props.data

  return (
    <Container>
      <Experience>Previous</Experience>
      {history.map((exp) => {
        return (
          <HistoryContainer key={exp.title}>
            <ExpHeader>
              <Title>{exp.title}</Title>
              <p>{exp.year}</p>
            </ExpHeader>
            <Description>{exp.description}</Description>
          </HistoryContainer>
        )
      })}
    </Container>
  )
}
