import React, { useState } from 'react';
import styled from 'styled-components';

export default function Header(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <ContentBox>
        <MainText>Hi, I'm Ricky Rhodes.</MainText>
        <SubText>
          A Fullstack Software Engineer and former creative professional.
        </SubText>
        {readMore && (
          <div>
            <ExtendedAbout>
              Currently focusing on Fullstack JavaScript using React, Express,
              Node, and Postgres.{' '}
            </ExtendedAbout>
            <ExtendedAbout>
              Also, dabbling in React Native, Python, Solidity, and Firebase.
            </ExtendedAbout>
            <ExtendedAbout>
              I was raised in a small farm town outside of Cleveland, OH.
            </ExtendedAbout>
            <ExtendedAbout>
              When not reading documentation, you can find me fly fishing or
              walking my giant Newfoundland dog.
            </ExtendedAbout>
          </div>
        )}
        <div onClick={() => setReadMore(!readMore)}>
          <DropdownButton>[read {readMore ? 'less]' : 'more]'} </DropdownButton>
        </div>
      </ContentBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* border: 2px solid red; */
  @media screen and (min-width: 960px) {
    padding-top: 10rem;
  }
`;

const ContentBox = styled.div`
  width: 90%;
  /* border: 2px solid hotpink; */
  @media screen and (min-width: 960px) {
    width: 70%;
  }
`;

const MainText = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 3rem;
  color: #1d403b;
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 3rem;
    margin-top: 2.7rem;
  }
`;

const SubText = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: #1d403b;
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

const ExtendedAbout = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: #1d403b;
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 4rem;
    margin-top: 2.7rem;
  }
`;

const Text = styled.p`
  font-family: nimbus-sans, sans-serif;
  font-size: 1rem;
  line-height: 2rem;
  @media screen and (min-width: 960px) {
    width: 75vw;
    font-size: 1.5rem;
    line-height: 4rem;
  }
`;

const DropdownButton = styled.p`
  font-family: Nimbus Mono;
  font-size: 0.9rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  cursor: pointer;
  @media screen and (min-width: 960px) {
    margin-top: 1.8rem;
    font-size: 1rem;
  }
`;
