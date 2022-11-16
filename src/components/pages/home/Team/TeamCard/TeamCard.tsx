import React from 'react';
import classes from './TeamCard.module.scss';
const TeamCard: React.FC<{ name: string; done: string }> = ({ name, done }) => (
  <div className={classes.container}>
    <img src="" alt="Member Image" />
    <div className={classes.description}>
      <h3>{name}</h3>
      <p>{done}</p>
    </div>
  </div>
);
export default TeamCard;
