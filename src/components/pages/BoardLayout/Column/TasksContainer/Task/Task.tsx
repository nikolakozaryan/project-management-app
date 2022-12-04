import React, { FC, useState } from 'react';
import ModalDelete from '../../../../../common/modalDelete/modalDelete';
import ModalDesk from '../../../../DeskLayout/ModalDesk/ModalDesk';
import classes from './Task.module.scss';

type MyProps = {
  id: string;
  title: string;
};

const Task: FC<MyProps> = ({ title, id }) => {
  const [showDelModal, setShowDelModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  return (
    <>
      {showDelModal ? <ModalDelete setModal={setShowDelModal} id={id} type="deleteTask" /> : null}
      {showEditModal ? <ModalDesk setModal={setshowEditModal} id={id} type="editTask" /> : null}
      <div
        onClick={(e) => {
          e.preventDefault();
          setshowEditModal(true);
        }}
        className={classes.task}
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
    </>
  );
};

export default Task;
