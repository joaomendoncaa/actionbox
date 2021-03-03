import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-main: #16161a;
    --background-secondary: #1E1E23;
    --background-expbar: #2F2F36;

    --text-primary: #ffffff;
    --text-secondary: #797979;

    --white: #fff;
    --green-light: #58ffaf;
    --green-dark: #2cb67d;
    --purple-light: #7f5af0;
    --purple-dark: #664cb7;

    --button-grey: #42424e;
    --button-hover-red: #b02b2b;
    --button-hover-green: #208A5E;

    --separator: #28282f;

    --twitter-blue: #2aa9e0;
    --twitter-blue-dark: #258AB6;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background-main);
    color: var(--text-primary);
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Inter", sans-serif;
    color: var(--text-primary);
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`
