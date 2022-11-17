import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const RouteComponent: React.FC<{ children: JSX.Element }> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default RouteComponent;
