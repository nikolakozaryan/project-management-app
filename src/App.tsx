import React, { useEffect } from 'react';
import Router from './components/common/Router/Router';
import './common/style/index.scss';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import AuthVerify from './components/common/AuthVerify/AuthVerify';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchUsers } from './features/users/usersSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const isAuth = useAppSelector((state) => state.signin.login);

  useEffect(() => {
    if (!users.length && isAuth) {
      dispatch(fetchUsers());
    }
  }, [dispatch, isAuth, users.length]);

  return (
    <>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
      <AuthVerify />
    </>
  );
};

export default App;
