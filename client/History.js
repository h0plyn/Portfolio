import React from 'react';
import styled from 'styled-components';

export default function History(props) {
  const { history } = props.data;

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
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ecdccb;
  width: 100%;
  background-color: #1d403b;
  padding: 2rem;
  @media screen and (min-width: 960px) {
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  border-top: 1px solid #ecdccb;
  padding-top: 1rem;
  width: 100%;
  @media screen and (min-width: 960px) {
  }
`;

const Title = styled.h1`
  color: #ecdccb;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 1.3px;
  @media screen and (min-width: 960px) {
    font-size: 2rem;
  }
`;

const ExpHeader = styled.div`
  color: #ecdccb;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Experience = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #ecdccb;
  margin-bottom: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 3rem;
    margin-bottom: 1.3rem;
  }
`;
const Description = styled.p`
  color: #ecdccb;
  font-size: 0.8rem;
  font-weight: 200;

  @media screen and (min-width: 960px) {
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

const Year = styled.div`
  font-size: 0.8rem;
  margin-left: 1rem;
  font-weight: 300;
  @media screen and (min-width: 960px) {
    font-size: 1.2rem;
  }
`;
