import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function Header(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <ContentBox>
        <MainText>Hey, I'm Ricky Rhodes.</MainText>
        <SubText>
          A Fullstack Software Engineer and former creative professional.
        </SubText>
        <AnimatePresence>
          {readMore && (
            <motion.div
              layout
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{
                default: { duration: 0.1, delay: 0.2 },
              }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          layout
          onClick={() => setReadMore(!readMore)}
          origin={{ x: 0 }}
          transition={{ type: 'tween', duration: 0.1 }}
        >
          <DropdownButton className="read-more">
            [read {readMore ? 'less]' : 'more]'}{' '}
          </DropdownButton>
        </motion.div>
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
  @media screen and (min-width: 960px) {
    padding-top: 10rem;
  }
`;

const ContentBox = styled.div`
  width: 90%;

  @media screen and (min-width: 960px) {
    width: 70%;
  }
`;

const MainText = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 3rem;
  color: var(--text);
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
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: var(--text);
  margin-bottom: 1rem;
  padding-left: 1rem;
  @media screen and (min-width: 960px) {
    font-size: 2.2rem;
    line-height: 3rem;
  }
`;

const ExtendedAbout = styled.h1`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.8rem;
  color: var(--light-green);
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
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;

  &:hover {
    transform: translateY(-0.2rem);
  }

  @media screen and (min-width: 960px) {
    margin-top: 1.8rem;
    font-size: 1rem;
  }
`;
