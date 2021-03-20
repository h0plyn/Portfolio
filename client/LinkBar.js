import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
  height: 10rem;
  padding-top: 1.5rem;
  padding-left: 1rem;

  @media only screen and (min-width: 960px) {
    padding-top: 2rem;
    padding-left: 2rem;
  }
`;

export default function LinkBar() {
  return (
    <Container>
      <a href="https://github.com/h0plyn">
        <FontAwesomeIcon icon={faGithubSquare} className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/rickyrhodes/">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon" />
      </a>

      <a href="https://twitter.com/h0plyn">
        <FontAwesomeIcon icon={faTwitterSquare} size="3x" className="icon" />
      </a>
      <a href="https://www.instagram.com/rickyrhodes/">
        <FontAwesomeIcon icon={faInstagramSquare} size="3x" className="icon" />
      </a>
    </Container>
  );
}
