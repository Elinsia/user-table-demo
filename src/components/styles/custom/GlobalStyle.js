import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
 
export const GlobalStyle = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    background: #986EC9;
    background: -webkit-linear-gradient(135deg, #FCC2BF, #986EC9);
    background: linear-gradient(135deg, #FCC2BF, #986EC9);
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
  }
`;