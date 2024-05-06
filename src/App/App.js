import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from '../contexts/UserContext';
import { DaySlotsProvider } from "../contexts/DaySlotsContext";
import { TimeSlotsProvider } from "../contexts/TimeSlotsContext";

import Routing from './Routing';

import '../assets/styles/App.css';

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DaySlotsProvider>
            <TimeSlotsProvider>
              <Routing />
            </TimeSlotsProvider>
        </DaySlotsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

export default Root;
