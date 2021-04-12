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
    overflow-x: hidden;
}

.blob {
    position: absolute;
    width: 120rem;
    top: -10rem;
    z-index: -1;
    opacity: 1.0;
    color: #003330;
}

.overflow {
    position: relative;
    max-width: 100vw;
    max-height: 100vh;
}

a {
    color: #e8e4e6;
    text-decoration: none;
    transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s
}

a:hover {
    transform : scale(1.05);
}

.icon {
    text-decoration: none;
    padding: 0.4rem;
    font-size: 4rem;
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .blob {
        width: 80%;
        margin-top: 15rem;
    }

    .icon {
        font-size: 3.7rem;
    }
}

/** For mobile devices **/
@media (max-width: 767px) {
    .blob {
        width: 90%;
        margin-top: 15rem;
        margin-right: 1rem;
    }

    .icon {
        font-size: 3rem;
    }
}
`;

export default GlobalStyles;
