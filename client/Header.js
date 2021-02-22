import React, { useState } from 'react';
import LinkBar from './LinkBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export default function Header(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <LinkBar />
      <MainText>
        Hi, I'm{' '}
        <span style={{ color: '#1d403b', fontWeight: '400' }}>
          Ricky Rhodes
        </span>
        .
      </MainText>
      <MainText>
        A
        <span style={{ color: '#1d403b', fontWeight: '400' }}>
          {' '}
          Fullstack Software Engineer
        </span>{' '}
        and former creative profesional.{' '}
        <div onClick={() => setReadMore(!readMore)}>
          <DropdownButton>
            Read {readMore ? 'less...' : 'more...'}{' '}
          </DropdownButton>
        </div>
      </MainText>
      {readMore && (
        <div>
          <Text>
            I was raised in a small farm town outside of Cleveland, OH. When not
            reading documentation, you can find me fly fishing or walking my
            giant Newfoundland dog. I am currently focusing on Fullstack
            JavaScript using React, Express, Node, and Postgres.{' '}
          </Text>
          <Text>
            I'm currently dabbling in React Native, Python, Solidity,
            Blockchain, and Firebase.
          </Text>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  justify-content: center;
`;

const MainText = styled.h1`
  font-size: 1.7rem;
  line-height: 2.48rem;
  color: #3b5d55;
  line-height: 2.5rem;
  @media screen and (min-width: 960px) {
    font-size: 3rem;
    line-height: 4rem;
    margin-top: 2.7rem;
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.5rem;
  @media screen and (min-width: 960px) {
    width: 75vw;
    font-size: 1.5rem;
    line-height: 4rem;
  }
`;

const DropdownButton = styled.p`
  font-size: 1.2rem;
  color: white;

  @media screen and (min-width: 960px) {
    font-size: 1.5rem;
  }
`;
