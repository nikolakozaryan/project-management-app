import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="signin" element={<Login />} />
    <Route path="signup" element={<Register />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
