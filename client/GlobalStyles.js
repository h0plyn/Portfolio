import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background-color: #ecdccb;
    color: #1d403b;
    font-family: 'Work Sans', sans-serif;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  .custom-shape-divider-top-1612623275 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1612623275 svg {
    position: relative;
    display: block;
    width: calc(154% + 1.3px);
    height: 52px;
}

.custom-shape-divider-top-1612623275 .shape-fill {
    fill: #1D403B;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-top-1612623275 svg {
        width: calc(154% + 1.3px);
        height: 60px;
    }
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1612623275 svg {
        width: calc(154% + 1.3px);
        height: 28px;
    }
}
`

export default GlobalStyles
