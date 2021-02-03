import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import 'reset.css';

  body {
    background-color: #ecdccb;
    color: #1d403b;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyles
