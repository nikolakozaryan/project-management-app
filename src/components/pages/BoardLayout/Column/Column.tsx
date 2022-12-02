import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import AddTask from './AddTask/AddTask';
import classes from './Column.module.scss';
import ColumnHeading from './ColumnHeading/ColumnHeading';
import Task from './Task/Task';
import TasksContainer from './TasksContainer/TasksContainer';

type MyProps = {
  title: string;
  columnId: string;
};

const Column: FC<MyProps> = ({ title, columnId }) => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const tasks = useAppSelector((state) =>
    state.board.tasks.filter((task) => task.columnId === columnId)
  );

  return (
    <>
      {modalAddVisible ? (
        <ModalDesk type="newTask" id={columnId} setModal={setModalAddVisible} />
      ) : null}
      <div className={classes.column}>
        <ColumnHeading title={title} id={columnId} />
        <TasksContainer>
          <>
            {tasks.map((task) => (
              <Task key={task._id} title={task.title} />
            ))}
          </>
        </TasksContainer>
        <AddTask setModal={setModalAddVisible} />
      </div>
    </>
  );
};

export default Column;
