import React from 'react';
import classes from './Logo.module.scss';

const Logo = () => (
  <div className={classes.container}>
    <img src="./home/logo.svg" alt="logo" />
    <h2>RS Project Management</h2>
  </div>
);

export default Logo;
