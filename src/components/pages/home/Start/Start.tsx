import React from 'react';
import classes from './Start.module.scss';
import StartDescription from './StartDescription/StartDescription';

const Start = () => (
  <div className={classes.container}>
    <StartDescription />
    <img src="../../../../public/home/image.png" alt="StartImage" />
  </div>
);

export default Start;
