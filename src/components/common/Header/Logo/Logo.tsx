import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Logo.module.scss';

const Logo = () => (
  <Link to="/">
    <div className={classes.container}>
      <span className={classes.logo} title="logo" />
      <h2>RS Project Management</h2>
    </div>
  </Link>
);

export default Logo;
