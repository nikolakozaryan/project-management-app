import React from 'react';
import classes from './NewDesk.module.scss';
import { DICTIONARY, Languages } from '../../../../constants/Dictionary/Dictionary';
import { useAppSelector } from '../../../../app/hooks';

const NewDesk: React.FC<{ setIsModalAdd: React.Dispatch<React.SetStateAction<boolean>> }> = ({
  setIsModalAdd,
}) => {
  const lang: string = useAppSelector((state) => state.language.lang);
  return (
    <div onClick={() => setIsModalAdd(true)} className={classes.container}>
      <img src="./assets/icons/deskLayout/plus.svg" alt="" />
      <h3 style={{ cursor: 'pointer' }}>{DICTIONARY.addBoardText[lang as Languages]}</h3>
    </div>
  );
};

export default NewDesk;
