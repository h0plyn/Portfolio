import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const BackToTop = styled.div`
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
`

const Copyright = styled.h4`
  font-size: 0.8rem;
  color: #3b5d55;
  margin-bottom: 1rem;
`

export default function Footer() {
  return (
    <FooterContainer>
      <BackToTop
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        Back to Top
      </BackToTop>
      <Copyright>2021 Ricky Rhodes</Copyright>
    </FooterContainer>
  )
}
