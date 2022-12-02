import React, { FC } from 'react';
import classes from './AddTask.module.scss';

type MyProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTask: FC<MyProps> = ({ setModal }) => {
  return (
    <div onClick={() => setModal(true)} className={classes.add}>
      <span className={classes.add__icon} />
      <p className={classes.add__text}>Добавить задачу</p>
    </div>
  );
};

export default AddTask;
