import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {
    Home,
    NotFound,
} from '../pages';

const App = () => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<NotFound />} />
    </Routes>
);

export default App;
