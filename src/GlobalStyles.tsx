import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
    --background-color: #004643;
    --text: #fffffe;
    --light-green: #abd1c6;
    --light-green-secondary: #001e1d;
    --button: #f9bc60;
    --button-text: #001e1d;
    --icon: #e8e4e6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: radial-gradient(#003331
, #004643);
    color: var(--text);
    /* font-family: Nimbus Mono, monospace; */
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

a.project-image:hover {
    transform : scale(1.02);
}

.icon {
    text-decoration: none;
    font-size: 3rem;

    &:hover {
    box-shadow: 3px 8px 34px -10px rgba(255, 255, 255, 0.3);
    }
}

.resume {
    text-decoration: none;
    font-size: 2.5rem;

    &:hover {
    box-shadow: 3px 8px 34px -10px rgba(255, 255, 255, 1);
    }
}

// Icon margin for Safari to account for unsupported Flexbox gap
@media not all and (min-resolution:.001dpcm) {
    @supports (-webkit-appearance:none) {
        .icon {
            margin-right: .7rem;
        }
    }
}

/** For tablet devices **/
@media (min-width: 768px) and (max-width: 1023px) {
    .blob {
        width: 80%;
        margin-top: 15rem;
    }

    .icon {
        font-size: 2.7rem;
    }

    .resume {
        font-size: 2.2rem;
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
        font-size: 2rem;
    }

    .resume {
        font-size: 1.75rem;
    }
}
`;

export default GlobalStyles;
