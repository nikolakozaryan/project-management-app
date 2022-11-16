import React from 'react';
import classes from './Header.module.scss';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logo from './Logo/Logo';

const Header = () => (
  <>
    <Logo />
    <HeaderButtons />
  </>
);

export default Header;
