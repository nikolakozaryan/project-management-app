import React, { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ModalDelete from '../../../../../common/modalDelete/modalDelete';
import ModalDesk from '../../../../DeskLayout/ModalDesk/ModalDesk';
import classes from './Task.module.scss';

type MyProps = {
  id: string;
  title: string;
  index: number;
};

const Task: FC<MyProps> = ({ title, id, index }) => {
  const [showDelModal, setShowDelModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  return (
    <>
      {showDelModal ? <ModalDelete setModal={setShowDelModal} id={id} type="deleteTask" /> : null}
      {showEditModal ? <ModalDesk setModal={setshowEditModal} id={id} type="editTask" /> : null}
      <Draggable draggableId={id} index={index}>
        {(provided) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              setshowEditModal(true);
            }}
            className={classes.task}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <p className={classes.task__title}>{title}</p>
            <span
              onClick={(e) => {
                e.stopPropagation();
                setShowDelModal(true);
              }}
              title="Delete task"
              className={classes.task__delete}
            />
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
