import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { UserProvider } from '../contexts/UserContext';

import Routing from './Routing';

import '../assets/styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#90A4AE",
    },
    text: {
      primary: "#90A4AE",
      hint: "#90A4AE",
    },
  },
});


const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Routing />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export default Root;
