import React from 'react';
import classes from './Team.module.scss';
import TeamCards from './TeamCards/TeamCards';

const Team = () => (
  <div className={classes.container}>
    <h3 className={classes.header}>Наша команда</h3>
    <TeamCards />
  </div>
);

export default Team;
