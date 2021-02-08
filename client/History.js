import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecdccb;
  width: 90%;
  margin: 1rem;
  @media screen and (min-width: 960px) {
    padding-left: 20rem;
  }
`

const Title = styled.h1`
  color: #1d403b;
  font-size: 1.2rem;
  margin: 0;
  @media screen and (min-width: 960px) {
    font-size: 2rem;
  }
`

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  @media screen and (min-width: 960px) {
  }
`
const ExpHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`

const Experience = styled.h1`
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #1d403b;
  margin-bottom: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 3rem;
    margin-bottom: 1.3rem;
  }
`
const Description = styled.p`
  color: #3b5d55;
  @media screen and (min-width: 960px) {
    font-size: 1.4rem;
    font-weight: 300;
  }
`

const Year = styled.div`
  margin-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 1.2rem;
  }
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
              <Year>{exp.year}</Year>
            </ExpHeader>
            <Description>{exp.description}</Description>
          </HistoryContainer>
        )
      })}
    </Container>
  )
}