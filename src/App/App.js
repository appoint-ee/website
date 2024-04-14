import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from '../contexts/UserContext';
import Routing from './Routing';

import '../assets/styles/App.css';

const Root = () => (
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
          <Routing />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);

export default Root;
