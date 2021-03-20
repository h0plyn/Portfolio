import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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

const Icon = styled.a`
  color: #fffffe;
  text-decoration: none;
  padding: 0.25rem;
`;

export default function LinkBar() {
  return (
    <Container>
      <a href="https://github.com/h0plyn">
        <FontAwesomeIcon icon={faGithubSquare} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/rickyrhodes/">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>

      <a href="https://twitter.com/h0plyn">
        <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
      </a>
      <a href="https://www.instagram.com/rickyrhodes/">
        <FontAwesomeIcon icon={faInstagramSquare} size="3x" />
      </a>
      {/* <Icon
        className="icon fab fa-github-square fa-2x"
        href="https://github.com/h0plyn"
        target="blank"
        style={{ marginLeft: '-0.25rem' }}
      ></Icon>

      <Icon
        className="icon fab fa-linkedin fa-2x"
        href="https://www.linkedin.com/in/rickyrhodes/"
        target="blank"
      ></Icon>
      <Icon
        className="icon fab fa-twitter-square fa-2x"
        href="https://twitter.com/h0plyn"
        target="blank"
      ></Icon>
      <Icon
        className="icon fab fa-instagram-square fa-2x"
        alt="Instagram"
        href="https://www.instagram.com/rickyrhodes/"
        target="blank"
      ></Icon> */}
    </Container>
  );
}
