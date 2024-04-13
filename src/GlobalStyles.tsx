import { createGlobalStyle } from "styled-components";

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
    font-family: input-mono, monospace;
    font-weight: bold;
    scroll-behavior: smooth;
    font-size: 16px;
    overflow-x: hidden;
}

a {
    color: #e8e4e6;
    text-decoration: none;
}

a:hover {
    transform : scale(1.05);
}

a.project-image:hover {
    transform : scale(1.02);
}
`;

export default GlobalStyles;
