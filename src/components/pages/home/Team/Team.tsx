import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../constants/Dictionary/Dictionary';
import classes from './Team.module.scss';
import TeamCards from './TeamCards/TeamCards';

const Team = () => {
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY.OurTeam;
  return (
    <div className={classes.container}>
      <h3 className={classes.header}>{dictionarySection[lang]}</h3>
      <TeamCards />
    </div>
  );
};
export default Team;
