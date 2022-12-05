import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { Languages, DICTIONARY } from '../../../constants/Dictionary/Dictionary';
import classes from './NewItem.module.scss';
import { MyProps } from './types';

const NewItem: React.FC<MyProps> = ({ type, setIsModalAdd }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const dictionaryItem = type === 'column' ? 'addColumnText' : 'addBoardText';

  return (
    <div onClick={() => setIsModalAdd(true)} className={classes.container}>
      <span className={classes.icon}></span>
      <h3>{DICTIONARY[dictionaryItem][lang]}</h3>
    </div>
  );
};

export default NewItem;
