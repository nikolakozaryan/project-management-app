import React from 'react';
import classes from './Header.module.scss';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logo from './Logo/Logo';

const Header = () => (
  <div className={classes.container}>
    <Logo />
    <HeaderButtons />
  </div>
);

export default Header;
