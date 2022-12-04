import React, { FC } from 'react';
import classes from './TasksContainer.module.scss';

type MyProps = { children: JSX.Element };

const TasksContainer: FC<MyProps> = ({ children }) => (
  <div className={classes.tasks__container}>
    <div className={classes.tasks}>{children}</div>
  </div>
);

export default TasksContainer;
