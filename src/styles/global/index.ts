import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--black);
  }
  
  *, button, input {
    border: 0;
  }

  :root {
    --primary: #E50914;
    --black: #000000;
    --blackLighter: #9E9E9E;
    --grayLight: #F5F5F5;
    --grayMedium: #e5e5e5; 
    --white: #FFFFFF;
    --frontEnd: #6BD1FF;
    --backEnd: #00C86F;
  }

  a {
    color: inherit;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`;
