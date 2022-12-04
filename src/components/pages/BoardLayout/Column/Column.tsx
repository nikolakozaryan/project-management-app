import React, { FC, useState } from 'react';
import { Draggable, DropResult } from 'react-beautiful-dnd';
import ModalDelete from '../../../common/modalDelete/modalDelete';
import { useAppSelector } from '../../../../app/hooks';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import AddTask from './AddTask/AddTask';
import classes from './Column.module.scss';
import ColumnHeading from './ColumnHeading/ColumnHeading';
import Task from './TasksContainer/Task/Task';
import TasksContainer from './TasksContainer/TasksContainer';
import { ITask } from '../../../../features/board/interface';

type MyProps = {
  title: string;
  columnId: string;
  index: number;
  boardId: string;
  tasks: ITask[];
};

const Column: FC<MyProps> = ({ title, columnId, index, tasks }) => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  console.log(tasks, 'checkwhat');
  const tasksColumn = tasks.filter((task) => task.columnId === columnId);

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
            <TasksContainer id={columnId}>
              <>
                {tasksColumn.map((task, index) => (
                  <Task key={task._id} id={task._id} title={task.title} index={index} />
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
