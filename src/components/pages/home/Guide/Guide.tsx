import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { DICTIONARY } from '../../../../constants/Dictionary';
import classes from './Guide.module.scss';
import Video from './Video/Video';

const Guide = () => {
  const set: string = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY.HowToWork;
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{dictionarySection[set as keyof typeof dictionarySection]}</h2>
      <Video embedId="Sy0A0pQmGPM"></Video>
    </div>
  );
};

export default Guide;
