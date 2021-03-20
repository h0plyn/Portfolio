import React from 'react';
import styled from 'styled-components';

export default function Projects(props) {
  const { projects } = props.data;
  return (
    <Container>
      <AllProjects>
        {projects.map(
          ({ name, id, projectUrl, imageUrl, aspect, description }) => {
            return (
              <ProjectContainer key={name} id={id}>
                {' '}
                <a href={projectUrl}>
                  <Image
                    className="project-image"
                    src={imageUrl}
                    aspect={aspect}
                  />
                </a>
                <QueryFlex>
                  <Title>{name}</Title>
                  <Description>{description}</Description>
                </QueryFlex>
              </ProjectContainer>
            );
          }
        )}
      </AllProjects>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #004643;
  /* border: 2px solid red; */
  padding-bottom: 6.5rem;
  @media screen and (min-width: 960px) {
    padding-top: 7rem;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin-top: 1.5rem;
  /* border: 2px solid hotpink; */

  @media screen and (min-width: 960px) {
    flex-direction: ${(p) => (p.id % 2 === 0 ? 'row-reverse' : 'row')};
    justify-content: center;
    width: 73%;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }
`;

const Title = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  color: #fffffe;
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }
`;

const Image = styled.img`
  height: ${(p) => (p.aspect === 'vertical' ? '75vw' : '50vw')};
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  /* border: 2px solid black; */

  @media screen and (min-width: 960px) {
    flex-direction: row;
    flex: 1;
    height: ${(p) => (p.aspect === 'vertical' ? '28vw' : '20vw')};
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
    font-size: 1.1rem;
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
