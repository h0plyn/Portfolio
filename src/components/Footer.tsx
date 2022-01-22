import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--light-green);
  padding-bottom: 3rem;
  padding-left: 2rem;
  @media screen and (min-width: 960px) {
    padding-left: 14rem;
  }
`;

const BackToTop = styled.div`
  font-family: nimbus-sans-extended, sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  color: var(--background-color);
  cursor: pointer;
  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Copyright = styled.h4`
  font-family: input-mono;
  font-weight: 300;
  font-size: 0.7rem;
  color: var(--background-color);
  @media screen and (min-width: 960px) {
    font-size: 1.1rem;
  }
`;

export default function Footer() {
  const { allDatoCmsFooter } = useStaticQuery(graphql`
    query {
      allDatoCmsFooter {
        edges {
          node {
            back
            copyright
          }
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <BackToTop
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        {allDatoCmsFooter.edges[0].node.back}
      </BackToTop>
      <Copyright>{allDatoCmsFooter.edges[0].node.copyright}</Copyright>
    </FooterContainer>
  );
}
