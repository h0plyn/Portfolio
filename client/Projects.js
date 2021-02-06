import React from 'react'
import styled from 'styled-components'
import {
  covid_dashboard_mock,
  stooply_mock,
  wallpaper_mock,
} from './projectData'

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

const Stooply = styled.div`
  background-image: url(${stooply_mock});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`
const Wallpaper = styled.div`
  background-image: url(${wallpaper_mock});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`

const CovidDashboard = styled.div`
  background-image: url(${covid_dashboard_mock});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
  border: 1px solid red;
`
const Project = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 350px;
`

const Title = styled.h1`
  color: white;
`

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
`

export default function Projects(props) {
  let { data } = props
  return (
    <Container>
      {data.projects.map((project) => {
        return (
          <ProjectContainer>
            <Project imageUrl={project.imageUrl} />
            <Title>{project.name}</Title>
          </ProjectContainer>
        )
      })}
      <MainText>Ricky Rhodes Photo</MainText>
      <MainText>Fullstack Academy</MainText>
      <MainText>Ohio University</MainText>
    </Container>
  )
}
