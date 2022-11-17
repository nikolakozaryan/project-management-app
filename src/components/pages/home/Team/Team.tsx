import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { DICTIONARY } from '../../../../constants/Dictionary';
import classes from './Team.module.scss';
import TeamCards from './TeamCards/TeamCards';

const Team = () => {
  const set: string = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY.OurTeam;
  return (
    <div className={classes.container}>
      <h3 className={classes.header}>{dictionarySection[set as keyof typeof dictionarySection]}</h3>
      <TeamCards />
    </div>
  );
};
export default Team;
