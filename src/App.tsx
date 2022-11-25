import React from 'react';
import Router from './components/common/Router/Router';
import './common/style/index.scss';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import AuthVerify from './components/common/AuthVerify/AuthVerify';

const App = () => (
  <>
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
    <AuthVerify />
  </>
);

export default App;
