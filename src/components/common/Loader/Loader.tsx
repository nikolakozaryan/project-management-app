import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => (
  <div className={classes.overlay}>
    <span className={classes.loader} />
  </div>
);

export default Loader;
