import React, { FC } from 'react';
import classes from './Task.module.scss';

type MyProps = {
  title: string;
};

const Task: FC<MyProps> = ({ title }) => {
  return (
    <div className={classes.task}>
      <p className={classes.task__title}>{title}</p>
      <span title="Delete task" className={classes.task__delete} />
    </div>
  );
};

export default Task;
