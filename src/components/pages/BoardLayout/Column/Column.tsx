import React, { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ModalDelete from '../../../common/modalDelete/modalDelete';
import { useAppSelector } from '../../../../app/hooks';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import AddTask from './AddTask/AddTask';
import classes from './Column.module.scss';
import ColumnHeading from './ColumnHeading/ColumnHeading';
import Task from './TasksContainer/Task/Task';
import TasksContainer from './TasksContainer/TasksContainer';

type MyProps = {
  title: string;
  columnId: string;
  index: number;
};

const Column: FC<MyProps> = ({ title, columnId, index }) => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const tasks = useAppSelector((state) =>
    state.board.tasks.filter((task) => task.columnId === columnId)
  );

  return (
    <>
      {modalAddVisible ? (
        <ModalDesk type="newTask" id={columnId} setModal={setModalAddVisible} />
      ) : null}
      <Draggable draggableId={columnId} index={index}>
        {(provided) => (
          <div
            className={classes.column}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <ColumnHeading title={title} id={columnId} />
            <TasksContainer>
              <>
                {tasks
                  .sort((task1, task2) => task1.order - task2.order)
                  .map((task) => (
                    <Task key={task._id} id={task._id} title={task.title} />
                  ))}
              </>
            </TasksContainer>
            <AddTask setModal={setModalAddVisible} />
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Column;
