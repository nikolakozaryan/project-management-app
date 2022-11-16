import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../../pages/Dashboard/Dashboard';
import Home from '../../../pages/Home/Home';
import Login from '../../../pages/Login/Login';
import NotFound from '../../../pages/NotFound/NotFound';
import Register from '../../../pages/Register/Register';
import RouteComponent from '../../RouteComponent/RouteComponent';

const Router = () => (
  <Routes>
    <Route
      index
      element={
        <RouteComponent>
          <Home />
        </RouteComponent>
      }
    />
    <Route
      path="home"
      element={
        <RouteComponent>
          <Home />
        </RouteComponent>
      }
    />
    <Route
      path="dashboard"
      element={
        <RouteComponent>
          <Dashboard />
        </RouteComponent>
      }
    />
    <Route
      path="signin"
      element={
        <RouteComponent>
          <Login />
        </RouteComponent>
      }
    />
    <Route
      path="signup"
      element={
        <RouteComponent>
          <Register />
        </RouteComponent>
      }
    />
    <Route
      path="*"
      element={
        <RouteComponent>
          <NotFound />
        </RouteComponent>
      }
    />
  </Routes>
);

export default Router;
