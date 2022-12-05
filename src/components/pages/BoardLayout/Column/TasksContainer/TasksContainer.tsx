import React, { FC } from 'react';
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
);

export default TasksContainer;
