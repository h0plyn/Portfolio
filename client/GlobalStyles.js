import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #004643;
    color: #fffffe;
    font-family: Nimbus Mono, monospace;
    font-weight: bold;
    scroll-behavior: smooth;
    font-size: 16px;
}

.blob {
    position: absolute;
    width: 120rem;
    overflow: hidden;
    left: 50%;
    top: -50%;
    height: 120rem;
    opacity: 0.1;
    z-index: -1;
    color: #abd1c6;
}

a {
    color: #e8e4e6;
    text-decoration: none;
    transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s}

a:hover {
    transform : scale(1.05);
}

.icon {
    text-decoration: none;
    padding: 0.4rem;
    font-size: 4rem;
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
    fill: #abd1c6;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .custom-shape-divider-top-1612623275 svg {
        width: calc(154% + 1.3px);
        height: 60px;
    }

    .icon {
        font-size: 3.7rem;
    }
}

/** For mobile devices **/
@media (max-width: 767px) {
    .custom-shape-divider-top-1612623275 svg {
        width: calc(154% + 1.3px);
        height: 28px;
    }

    .icon {
        font-size: 3rem;
    }
}
`;

export default GlobalStyles;
