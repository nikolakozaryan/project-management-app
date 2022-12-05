import React from 'react';
import { BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './StartDescription.module.scss';
import Button from '../../../../common/Button/Button';
import { useAppSelector } from '../../../../../app/hooks';
import {
  DICTIONARY,
  DictionaryKeys,
  Languages,
} from '../../../../../constants/Dictionary/Dictionary';

const StartDescription = () => {
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY.Description;

  return (
    <div className={classes.container}>
      <div className={classes.animation__container}>
        <h1 className={classes.header}>RS Project Management</h1>
      </div>
      <div className={classes.animation__container}>
        <p className={classes.description}>{dictionarySection[lang]}</p>
      </div>
      <div className={classes.button}>
        <Button type={BUTTONS.start as DictionaryKeys} link={true} color={'blue'} />
      </div>
    </div>
  );
};

export default StartDescription;
