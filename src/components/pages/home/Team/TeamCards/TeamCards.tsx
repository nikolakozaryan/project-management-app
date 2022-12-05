import React from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { Languages } from '../../../../../constants/Dictionary/Dictionary';
import { TEAM_MEMBERS } from '../../../../../constants/TeamMembers';
import TeamCard from '../TeamCard/TeamCard';
import classes from './TeamCards.module.scss';

const TeamCards = () => {
  const lang: Languages = useAppSelector((state) => state.language.lang);
  return (
    <div className={classes.container}>
      {TEAM_MEMBERS.map((item, index) => (
        <TeamCard name={item.name[lang]} done={item.done[lang]} key={index} image={item.image} />
      ))}
    </div>
  );
};
export default TeamCards;
