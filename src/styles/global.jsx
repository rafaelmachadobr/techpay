import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 14px;
        color: #333;
        font-family: inter, sans-serif;
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
`;
