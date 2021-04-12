import React, { useContext } from 'react';
import HistoryContext from '../context/HistoryContext';
import styled from 'styled-components';

export default function History(props) {
  const history = useContext(HistoryContext);

  return (
    <Container>
      <Experience>Previous</Experience>
      {history.map((exp) => {
        return (
          <HistoryContainer key={exp.id}>
            <ExpHeader>
              <Title>{exp.title}</Title>
              <Year>{exp.year}</Year>
              <Description>{exp.description}</Description>
            </ExpHeader>
            <DescriptionMobile>{exp.description}</DescriptionMobile>
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
  width: 100%;
  background-color: #abd1c6;
  padding: 2rem;
  @media screen and (min-width: 960px) {
    padding: 10rem 14rem;
  }
`;

const Experience = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #001e1d;
  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
    margin-bottom: 5rem;
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1rem;
  border-top: 1px solid #001e1d;
  padding-top: 1rem;
  width: 100%;
  @media screen and (min-width: 960px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    margin-bottom: 0rem;
    max-width: 1920px;
    margin: auto;
  }
`;

const ExpHeader = styled.div`
  color: #004643;
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 960px) {
    align-items: center;
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  color: #004643;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  @media screen and (min-width: 960px) {
    font-size: 1.5rem;
    flex: 1;
  }
`;

const DescriptionMobile = styled.p`
  color: #004643;
  font-size: 0.8rem;
  font-weight: 200;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const Description = styled.p`
  display: none;
  @media screen and (min-width: 960px) {
    display: flex;
    color: #004643;
    font-size: 0.8rem;
    font-weight: 200;
    font-size: 1.2rem;
    flex: 2;
    margin-right: 3rem;
    margin-top: 8px;
  }
`;

const Year = styled.div`
  font-size: 0.8rem;
  margin-left: 1rem;
  font-weight: 300;
  margin-top: 5px;

  @media screen and (min-width: 960px) {
    margin-top: 8px;
    font-size: 1.2rem;
    flex: 1;
  }
`;