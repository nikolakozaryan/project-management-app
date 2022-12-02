import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../../../../app/hooks';
import { editColumn } from '../../../../../../features/board/boardSlice';
import classes from './HeadingForm.module.scss';
import { FormInputs, MyProps } from './types';

const HeadingForm: FC<MyProps> = ({ title, handleEditMode, columnId }) => {
  const dispatch = useAppDispatch();
  const methods = useForm<FormInputs>();
  const order = useAppSelector(
    (state) => state.board.columns.find((column) => column._id === columnId)?.order
  ) as number;
  const boardId = useBoardID();

  useEffect(() => {
    methods.setValue('title', title);
  }, []);

  const formSubmitHandler: SubmitHandler<FormInputs> = (data, event) => {
    event?.preventDefault();
    dispatch(editColumn({ ...data, order: order, boardId, columnId }));
    handleEditMode();
  };

  return (
    <>
      <form onSubmit={methods.handleSubmit(formSubmitHandler)} id="column-form">
        <input className={classes.input} {...methods.register('title')} type="text" autoFocus />
      </form>
      <div className={classes.buttons__container}>
        <button className={`${classes.button} ${classes.button_send} `} form="column-form" />
        <button
          onClick={handleEditMode}
          className={`${classes.button} ${classes.button_cancel} `}
        />
      </div>
    </>
  );
};

export default HeadingForm;
