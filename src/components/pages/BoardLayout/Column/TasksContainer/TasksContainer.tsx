import React, { FC } from 'react';
<<<<<<< HEAD
import { Droppable } from 'react-beautiful-dnd';
import classes from './TasksContainer.module.scss';

type MyProps = { children: JSX.Element; id: string };

const TasksContainer: FC<MyProps> = ({ children, id }) => (
  <Droppable droppableId={id} type="tasks">
    {(provided) => (
      <div
        className={classes.tasks__container}
        {...provided.droppableProps}
        ref={provided.innerRef}
      >
        <div className={classes.tasks}>{children}</div>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
=======
import classes from './TasksContainer.module.scss';

type MyProps = { children: JSX.Element };

const TasksContainer: FC<MyProps> = ({ children }) => (
  <div className={classes.tasks__container}>
    <div className={classes.tasks}>{children}</div>
  </div>
>>>>>>> d2039b5720c2d82bc929ccb1bd6cee7a43b41dec
);

export default TasksContainer;
