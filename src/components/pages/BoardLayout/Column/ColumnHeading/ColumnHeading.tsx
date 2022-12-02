import React, { FC, useState } from 'react';
import ModalDelete from '../../../../common/modalDelete/modalDelete';
import classes from './ColumnHeading.module.scss';
import HeadingForm from './HeadingForm/HeadingForm';
import HeadingText from './HeadingText/HeadingText';

type MyProps = { title: string; id: string };

const ColumnHeading: FC<MyProps> = ({ title, id }) => {
  const [editMode, setEditMode] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);

  const handleDelete = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    setShowDelModal(true);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {showDelModal ? <ModalDelete id={id} type="deleteColumn" setModal={setShowDelModal} /> : null}
      <div className={classes.heading__container}>
        {editMode ? (
          <HeadingForm columnId={id} title={title} handleEditMode={handleEditMode} />
        ) : (
          <HeadingText
            title={title}
            handleEditMode={handleEditMode}
            handleDeleteColumn={handleDelete}
          />
        )}
      </div>
    </>
  );
};

export default ColumnHeading;
