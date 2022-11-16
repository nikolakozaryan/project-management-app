import React from 'react';
import { TEAM_MEMBERS } from '../../../../../constants/TeamMembers';
import TeamCard from '../TeamCard/TeamCard';

const TeamCards = () => (
  <div>
    {TEAM_MEMBERS.map((item, index) => (
      <TeamCard name={item.name} done={item.done} key={index} />
    ))}
  </div>
);

export default TeamCards;
