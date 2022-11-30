import React from 'react';
import classes from './GitProfile.module.scss';

const GitProfile: React.FC<{ name: string; link: string }> = ({ name, link }) => (
  <a className={classes.container} href={link} target="_blank" rel="noreferrer">
    <img src="./home/git.svg" alt="" />
    <span>{name}</span>
  </a>
);
export default GitProfile;
