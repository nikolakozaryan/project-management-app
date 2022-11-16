import React from 'react';
import Header from '../common/Header/Header';
import Footer from '../common/Footer/Footer';

const RouteComponent: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default RouteComponent;
