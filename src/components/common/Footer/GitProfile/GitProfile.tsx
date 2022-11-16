import React from 'react';
import classes from './GitProfile.module.scss';

const GitProfile: React.FC<{ name: string }> = ({ name }) => (
  <div className={classes.container}>
    <img src="./home/git.svg" alt="" />
    <span>{name}</span>
  </div>
);
export default GitProfile;
