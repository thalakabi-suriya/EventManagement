import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .app {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .content {
    flex: 1;
  }
`;

export default GlobalStyle;
