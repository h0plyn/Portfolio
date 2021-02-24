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
  background-color: #1d403b;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
`;

const BackToTop = styled.div`
  font-family: nimbus-sans, sans-serif;
  font-weight: 300;
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  color: #ecdccb;
`;

const Copyright = styled.h4`
  font-family: 'Nimbus Mono';
  font-weight: 300;
  font-size: 0.8rem;
  color: #ecdccb;
`;
