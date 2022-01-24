import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import Home from './Pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6346fe',
    },
    common: {
      bg: '#ffffff',
      light: '#cdcdcd',
      color: '#000000',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

const theme2 = createTheme({
  palette: {
    primary: {
      main: '#131921',
    },
    common: {
      bg: '#131921',
      active: '#6346fe',
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Home />
    </ThemeProvider>
  );
};

export default App;
