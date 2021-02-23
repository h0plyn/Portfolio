import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #1d403b;
  padding: 3rem;
`;

const BackToTop = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  color: #ecdccb;
`;

const Copyright = styled.h4`
  font-size: 0.8rem;
  color: #ecdccb;
`;

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
