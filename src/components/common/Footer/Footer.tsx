import React from 'react';
import { TEAM_MEMBERS } from '../../../constants/TeamMembers';
import GitProfile from './GitProfile/GitProfile';
import classes from './Footer.module.scss';

const Footer = () => (
  <div className={classes.container}>
    <img src="" alt="RS Logo" />
    {TEAM_MEMBERS.map((item, index) => (
      <GitProfile name={item.name} key={index} />
    ))}
  </div>
);

export default Footer;
