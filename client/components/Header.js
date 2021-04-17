import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ExtendedAbout } from './ExtendedAbout';

export default function Header(props) {
  const [readMore, setReadMore] = useState(false);
  return (
    <Container>
      <ContentBox>
        <MainText>Hey, I'm Ricky Rhodes.</MainText>
        <SubText>
          A Fullstack Software Engineer and former creative professional.
        </SubText>
        <AnimatePresence>{readMore && <ExtendedAbout />}</AnimatePresence>
        <motion.div
          layout
          onClick={() => setReadMore(!readMore)}
          transition={{ type: 'tween', duration: 0.2 }}
        >
          <DropdownButton>
            <p className="read-more">Read {readMore ? 'less' : 'more'}</p>
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

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Nimbus Mono;
  font-size: 0.9rem;
  margin-left: 1rem;
  width: 7rem;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  background-color: var(--light-green);
  color: var(--light-green-secondary);
  padding: 0.5rem;
  border-radius: 6px;

  &:hover {
    transform: translateY(-0.2rem);
    box-shadow: 3px 8px 34px -10px rgba(255, 255, 255, 0.1);
  }

  @media screen and (min-width: 960px) {
    padding: 1rem;
    margin-top: 1.8rem;
    font-size: 1rem;
    width: 10rem;
    border-radius: 10px;
  }
`;
