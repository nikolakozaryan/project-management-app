import React, { FC, useState } from 'react';
import ModalDelete from '../../../common/modalDelete/modalDelete';
import classes from './Column.module.scss';

type MyProps = {
  title: string;
  columnId: string;
};

const Column: FC<MyProps> = ({ title, columnId }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setShowDeleteModal(true);
  };

  return (
    <div className={classes.column}>
      {showDeleteModal ? (
        <ModalDelete type="deleteColumn" id={columnId} setModal={setShowDeleteModal} />
      ) : null}
      <span onClick={handleDeleteClick} className={classes.column__delete} />
      <h5 className={classes.column__heading} title={title}>
        {title}
      </h5>
    </div>
  );
};

export default Column;
