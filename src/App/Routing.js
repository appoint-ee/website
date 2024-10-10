import React from 'react';

import { Route, Routes } from 'react-router-dom';

import {
    Landing,
    NotFound,
} from '../pages';

const App = () => (
    <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route element={<NotFound />} />
    </Routes>
);

export default App;
