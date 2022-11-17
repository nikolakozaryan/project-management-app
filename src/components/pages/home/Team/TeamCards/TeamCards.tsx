import React from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { TEAM_MEMBERS } from '../../../../../constants/TeamMembers';
import TeamCard from '../TeamCard/TeamCard';
import classes from './TeamCards.module.scss';

const TeamCards = () => {
  const set: string = useAppSelector((state) => state.language.lang);
  return (
    <div className={classes.container}>
      {TEAM_MEMBERS.map((item, index) => (
        <TeamCard
          name={item.name[set as keyof typeof item.name]}
          done={item.done[set as keyof typeof item.done]}
          key={index}
        />
      ))}
    </div>
  );
};
export default TeamCards;
