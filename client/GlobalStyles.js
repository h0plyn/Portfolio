import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background-color: #ecdccb;
    color: #1d403b;
    font-family: Nimbus Mono, monospace;
    font-weight: bold;
    scroll-behavior: smooth;
    font-size: 16px;
  }

  .project-image {
    height: ${(p) => (p.aspect === 'vertical' ? '75vw' : '50vw')};
    padding-left: 0;
    padding-right: 0;
    margin-top: 0;
    margin-bottom: 1rem;
    border: 2px solid black;

    @media screen and (min-width: 960px) {
        /* display: inline-flex; */
        flex-direction: row;
        flex: 1;
        /* width: 35%; */
        height: ${(p) => (p.aspect === 'vertical' ? '30vw' : '25vw')};
        margin: 0;
        padding: 0;
    }
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
`;

export default GlobalStyles;
