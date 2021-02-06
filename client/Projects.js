import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecdccb;
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
  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`

const ProjectImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  height: ${(props) => (props.aspect === 'vertical' ? '75vw' : '50vw')};
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;

  a {
    position: absolute;
    width: 90%;
    height: ${(props) => (props.aspect === 'vertical' ? '50%' : '30%')};
  }
`

const AllProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Description = styled.p`
  font-size: 0.7rem;
  margin-bottom: 1.7rem;
`

export default function Projects(props) {
  const { projects } = props.data
  console.log(props)

  return (
    <Container>
      <AllProjects>
        {projects.map((project) => {
          return (
            <ProjectContainer key={project.name}>
              <ProjectImage imageUrl={project.imageUrl} aspect={project.aspect}>
                <a href={project.projectUrl}></a>
              </ProjectImage>
              <Title>{project.name}</Title>
              <Description>{project.description}</Description>
            </ProjectContainer>
          )
        })}
      </AllProjects>
    </Container>
  )
}
