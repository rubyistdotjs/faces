import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import darkTheme from './themes/dark/theme';
import Theme from './themes/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fontFamilies.sans};
    background-color: ${({ theme }) => theme.colors.gray.darkest};
  }
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
