import React from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../constants/Dictionary/Dictionary';
import classes from './Guide.module.scss';
import Video from './Video/Video';

const Guide = () => {
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY.HowToWork;
  return (
    <div className={classes.container}>
      <h2 className={classes.header}>{dictionarySection[lang]}</h2>
      <Video embedId="Sy0A0pQmGPM" />
    </div>
  );
};

export default Guide;
