import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProjectContainer {
  key: string;
  projectid: number;
}

interface Image {
  image: IGatsbyImageData;
  aspect: string;
}

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsProject(sort: { fields: projectid, order: ASC }) {
        edges {
          node {
            image {
              gatsbyImageData(layout: CONSTRAINED)
              title
            }
            description
            projectid
            projecturl
            title
            aspect
          }
        }
      }
    }
  `);

  console.log('Projects data', data);

  return (
    <Container
      layout
      initial={{ x: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 80,
        bounce: 0.95,
        duration: 0.2,
        damping: 12,
      }}
    >
      <AllProjects>
        {data.allDatoCmsProject.edges.map((project: any, idx: number) => {
          const image = getImage(project.node.image);
          console.log(project);
          return (
            <ProjectContainer
              key={project.node.title}
              projectid={project.node.projectid}
            >
              {' '}
              <a className="project-image" href={project.node.projectUrl}>
                <Image
                  image={image as IGatsbyImageData}
                  alt={project.node.title}
                  aspect={project.aspect}
                  objectFit="contain"
                />
              </a>
              <QueryFlex>
                <Title>{project.node.title}</Title>
                <Description>{project.node.description}</Description>
              </QueryFlex>
            </ProjectContainer>
          );
        })}
      </AllProjects>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6.5rem;
  @media screen and (min-width: 960px) {
    padding-top: 7rem;
    margin: auto;
  }
`;

const ProjectContainer = styled.div<ProjectContainer>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin-top: 1.5rem;

  @media screen and (min-width: 960px) {
    flex-direction: ${(p) => (p.projectid % 2 === 0 ? 'row-reverse' : 'row')};
    justify-content: center;
    width: 73%;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }
`;

const Title = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  color: var(--text);
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }
`;

const Image = styled(GatsbyImage)<Image>`
  height: ${(p) => (p.aspect === 'vertical' ? '70vw' : '50vw')};
  padding-left: 0;
  padding-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;

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
