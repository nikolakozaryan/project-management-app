import React, { FC, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ModalDelete from '../../../common/modalDelete/modalDelete';
import classes from './Column.module.scss';

type MyProps = {
  title: string;
  columnId: string;
  index: number;
};

const Column: FC<MyProps> = ({ title, columnId, index }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  return (
    <Draggable draggableId={columnId} index={index}>
      {(provided) => (
        <div
          className={classes.column}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {showDeleteModal ? (
            <ModalDelete type="deleteColumn" id={columnId} setModal={setShowDeleteModal} />
          ) : null}
          <span onClick={handleDeleteClick} className={classes.column__delete} />
          <h5 className={classes.column__heading} title={title}>
            {title}
          </h5>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
