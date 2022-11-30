import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../../pages/Dashboard/Dashboard';
import Edit from '../../../pages/Edit/Edit';
import Home from '../../../pages/Home/Home';
import Login from '../../../pages/Login/Login';
import NotFound from '../../../pages/NotFound/NotFound';
import Register from '../../../pages/Register/Register';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="signin" element={<Login />} />
    <Route path="signup" element={<Register />} />
    <Route path="edit" element={<Edit />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
