import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Title = styled.h1`
  color: #1d403b;
  font-size: 1.2rem;
  margin: 0;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
`

const ProjectImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  flex: 1;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-bottom: 47%;
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
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

const AllProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Projects(props) {
  const { projects } = props.data

  return (
    <Container>
      <AllProjects>
        {projects.map((project) => {
          return (
            <ProjectContainer key={project.name}>
              <ProjectImage imageUrl={project.imageUrl} />
              <Title>{project.name}</Title>
            </ProjectContainer>
          )
        })}
      </AllProjects>
    </Container>
  )
}
