import React from 'react';
import { TEAM_MEMBERS } from '../../../../../constants/TeamMembers';
import TeamCard from '../TeamCard/TeamCard';
import classes from './TeamCards.module.scss';

const TeamCards = () => (
  <div className={classes.container}>
    {TEAM_MEMBERS.map((item, index) => (
      <TeamCard name={item.name} done={item.done} key={index} />
    ))}
  </div>
);

export default TeamCards;
