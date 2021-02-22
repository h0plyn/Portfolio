import React from 'react';
import styled from 'styled-components';

export default function Projects(props) {
  const { projects } = props.data;
  return (
    <Container>
      <AllProjects>
        <HeaderProj>Projects</HeaderProj>
        {projects.map((project) => {
          return (
            <ProjectContainer key={project.name}>
              <ProjectImage imageUrl={project.imageUrl} aspect={project.aspect}>
                <a href={project.projectUrl}></a>
              </ProjectImage>
              <QueryFlex>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
              </QueryFlex>
            </ProjectContainer>
          );
        })}
      </AllProjects>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecdccb;
`;

const Title = styled.h1`
  color: #1d403b;
  font-size: 1.2rem;
  margin: 0;
  @media screen and (min-width: 960px) {
    font-size: 1.7rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5rem;
  }
`;

const ProjectImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
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

  @media screen and (min-width: 960px) {
    display: inline-flex;
    flex-direction: row;
    flex: 2;
    width: 35%;
    height: ${(props) => (props.aspect === 'vertical' ? '30vw' : '25vw')};
    margin: 0;
    padding: 0;
  }
`;

const AllProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 0.7rem;
  margin-bottom: 1.7rem;
  @media screen and (min-width: 960px) {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

const QueryFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 960px) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
  }
`;
const HeaderProj = styled.h1`
  font-size: 1.3rem;
  line-height: 2.48rem;
  color: #1d403b;
  margin-bottom: 0.3rem;
  @media screen and (min-width: 960px) {
    font-size: 3rem;
    margin-bottom: 1.3rem;
  }
`;
