import React from 'react';
import styled from 'styled-components';

export default function Projects(props) {
  const { projects } = props.data;
  return (
    <Container>
      <AllProjects>
        {projects.map((project) => {
          return (
            <ProjectContainer key={project.name} id={project.id}>
              {' '}
              <a href={project.projectUrl}>
                <img
                  className="project-image"
                  src={project.imageUrl}
                  aspect={project.aspect}
                />
              </a>
              {/* <ProjectImage imageUrl={project.imageUrl} aspect={project.aspect}>
                <a href={project.projectUrl} />
              </ProjectImage> */}
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
  border: 2px solid red;
  padding-bottom: 6.5rem;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin-top: 1.5rem;
  border: 2px solid hotpink;

  @media screen and (min-width: 960px) {
    flex-direction: ${(p) => (p.id % 2 === 0 ? 'row-reverse' : 'row')};
    justify-content: center;
    width: 73%;
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  color: #1d403b;
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
  }
`;

const ProjectImage = styled.div`
  background-image: url(${(p) => p.imageUrl});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: ${(p) => (p.aspect === 'vertical' ? '75vw' : '50vw')};
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  border: 2px solid black;

  a {
    position: absolute;
    width: 90%;
    height: ${(p) => (p.aspect === 'vertical' ? '75vw' : '50vw')};
  }

  @media screen and (min-width: 960px) {
    display: inline-flex;
    flex-direction: row;
    flex: 1;
    width: 35%;
    height: ${(p) => (p.aspect === 'vertical' ? '30vw' : '25vw')};
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
  font-family: 'Nimbus Mono', monospace;
  font-weight: bold;
  font-size: 0.7rem;
  margin-bottom: 1.7rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    padding-left: 0;
    font-size: 0.9rem;
  }
`;

const QueryFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  /* border: 2px solid brown; */
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex: 1;
    width: 100%;
    height: 100%;
    padding-left: 5rem;
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
