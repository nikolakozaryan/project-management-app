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
      <h1 className={classes.header}>RS Project Management</h1>
      <p className={classes.description}>{dictionarySection[lang]}</p>
      <Button type={BUTTONS.start as DictionaryKeys} link={true} color={'blue'} />
    </div>
  );
};

export default StartDescription;
