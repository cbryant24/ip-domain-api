import React from 'react';
import { ThemeProvider } from '@cbryant24/styled-react';
import GlobalStyle from './globalStyle';
import { IpDisplay } from './IpDisplay';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <IpDisplay/>
    </ThemeProvider>
  )
}

export default App;
