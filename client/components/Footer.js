import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <BackToTop
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Back to Top
      </BackToTop>
      <Copyright>2021 Ricky Rhodes</Copyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #abd1c6;
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
  color: #004643;
  cursor: pointer;
  @media screen and (min-width: 960px) {
    font-size: 2.5rem;
  }
`;

const Copyright = styled.h4`
  font-family: 'Nimbus Mono';
  font-weight: 300;
  font-size: 0.8rem;
  color: #004643;
  @media screen and (min-width: 960px) {
    font-size: 1.1rem;
  }
`;
