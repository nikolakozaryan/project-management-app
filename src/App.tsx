import React from 'react';
import Router from './components/common/Router/Router';
import './style.scss';
import './common/style/index.scss';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Router />
    <Footer />
  </div>
);

export default App;
