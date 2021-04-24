import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExtendedAbout = () => {
  return (
    <motion.div
      layout
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        default: { duration: 0.1, delay: 0.2 },
      }}
    >
      <ExtendedText>
        Currently focusing on Fullstack JavaScript using React, Express, Node,
        and Postgres.{' '}
      </ExtendedText>
      <ExtendedText>
        Also, dabbling in React Native, Python, Solidity, and Firebase.
      </ExtendedText>
      <ExtendedText>
        I was raised in a small farm town outside of Cleveland, OH.
      </ExtendedText>
      <ExtendedText>
        When not reading documentation, you can find me fly fishing or walking
        my giant Newfoundland dog.
      </ExtendedText>
    </motion.div>
  );
};

const ExtendedText = styled.h1`
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
