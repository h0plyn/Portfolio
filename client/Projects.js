import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 1rem 2rem; */
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

const Project = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  margin-top: 0;
  height: 60vh;
  margin-bottom: 1rem;
  border: 1px solid red;
`

const Title = styled.h1`
  color: #1d403b;
  font-size: 1.2rem;
  margin: 0;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  color: #3b5d55;
`

export default function Projects(props) {
  const { projects, history } = props.data

  return (
    <Container>
      {projects.map((project) => {
        return (
          <ProjectContainer key={project.name}>
            <Project imageUrl={project.imageUrl} />
            <Title>{project.name}</Title>
          </ProjectContainer>
        )
      })}
      <Experience>Previous</Experience>
      {history.map((exp) => {
        console.log(exp)
        return (
          <HistoryContainer key={exp.title}>
            <ExpHeader>
              <Title>{exp.title}</Title>
              <p>{exp.year}</p>
            </ExpHeader>
            <p>{exp.description}</p>
          </HistoryContainer>
        )
      })}
    </Container>
  )
}
