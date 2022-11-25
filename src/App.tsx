import React from 'react';
import Router from './components/common/Router/Router';
import './common/style/index.scss';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import AuthVerify from './components/common/AuthVerify/AuthVerify';
import { useAppDispatch } from './app/hooks';
import { resetSignupState } from './features/signup/signupSlice';
import { resetSigninState } from './features/signin/signinSlice';

const App = () => {
  const dispatch = useAppDispatch();

  const logOut = () => {
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_login');
    dispatch(resetSignupState());
    dispatch(resetSigninState());
  };

  return (
    <>
      <div className="app">
        <Header />
        <Router />
        <Footer />
      </div>
      <AuthVerify logout={logOut} />
    </>
  );
};

export default App;
