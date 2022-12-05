import React, { FC, useState } from 'react';
import { Draggable, DropResult } from 'react-beautiful-dnd';
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

const Column: FC<MyProps> = ({ title, columnId, index, tasks, boardId }) => {
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const tasksColumn = tasks.filter((task) => task.columnId === columnId);

  return (
    <>
      {modalAddVisible ? (
        <ModalDesk type="newTask" id={columnId} setModal={setModalAddVisible} hasSelect={false} />
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
                  <Task
                    key={task._id}
                    id={task._id}
                    title={task.title}
                    index={index}
                    columnId={columnId}
                  />
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
