import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
  padding-top: 1.5rem;
  padding-left: 1rem;
`;

const Icon = styled.a`
  color: #1d403b;
  text-decoration: none;
  padding: 0.25rem;
`;

export default function LinkBar() {
  const [info, setInfo] = useState(false);

  return (
    <Container>
      <Icon
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
      ></Icon>
    </Container>
  );
}
