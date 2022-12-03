import React, { FC } from 'react';
import { useAppSelector } from '../../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../../constants/Dictionary/Dictionary';
import classes from './AddTask.module.scss';

type MyProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTask: FC<MyProps> = ({ setModal }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;

  return (
    <div onClick={() => setModal(true)} className={classes.add}>
      <span className={classes.add__icon} />
      <p className={classes.add__text}>{DICTIONARY.add_task[lang]}</p>
    </div>
  );
};

export default AddTask;
