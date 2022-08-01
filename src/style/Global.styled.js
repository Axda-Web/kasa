import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-size: 100%;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyles