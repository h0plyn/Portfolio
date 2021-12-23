import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faFile, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export default function LinkBar() {
  return (
    <Container>
      <a href="mailto:devrickyrhodes@gmail.com?subject=Hey there!">
        <FontAwesomeIcon icon={faEnvelopeSquare} className="icon" />
      </a>
      <a href="https://github.com/h0plyn">
        <FontAwesomeIcon icon={faGithubSquare} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/rickyrhodes/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>

      <a href="https://twitter.com/h0plyn" target="_blank">
        <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
      </a>
      <a href="https://www.instagram.com/rickyrhodes/" target="_blank">
        <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
      </a>
      <a
        href="https://standardresume.co/r/azQnZ76rvx8XG6MLTzvny"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFile} className="resume" />
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  left: 1.3rem;
  width: 100%;
  margin-bottom: 5rem;
  padding-top: 1.5rem;
  padding-left: 1rem;
  gap: 0.8rem;

  @media only screen and (min-width: 960px) {
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 3%;
    padding-left: 0;
    padding-top: 0;
    margin-bottom: 12rem;
    z-index: 10;
  }
`;
