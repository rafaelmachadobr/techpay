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

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.background};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background: #1521CF;
    }


    body {
        background: ${(props) => props.theme.colors.background};
        font-size: 14px;
        color: ${(props) => props.theme.colors.text};
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
