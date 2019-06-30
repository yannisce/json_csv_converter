import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

///////////////////////
// Global CSS Rules //
/////////////////////
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Francois+One&display=swap');

  ${reset} // Styled reset

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    box-sizing: border-box;
    background: linear-gradient(to right, #4e54c8, #8f94fb);
    line-height: 1.6;
    font-size: 2.6rem;
    font-family: 'Francois One', sans-serif;
    color: #f2f4f6;
  }
`;