import React, { useEffect, useState } from 'react';
import classes from './ModalDesk.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button/Button';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../../app/hooks';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../../constants/Dictionary/Dictionary';
import { createBoard } from '../../../../features/dashboard/dashboardSlice';
import { editBoard } from '../../../../features/dashboard/dashboardSlice';
import { MODAL_NEW_TYPES } from '../../../../constants/Modal';
import UserSelect from '../../../common/userSelect/userSelect';
import Overlay from '../../../common/Overlay/Overlay';
import { MyProps } from './types';
import { createColumn, createTask, editTask } from '../../../../features/board/boardSlice';
import { parseBoardDescription } from '../../../../common/functions/parseBoardDescription';

const ModalDesk: React.FC<MyProps> = ({ type, id, setModal }) => {
  const { register, handleSubmit, watch, setValue } = useForm();
  const userId = localStorage.getItem('user_id') as string;
  const isEdit = type.startsWith('edit');
  const boardId = useBoardID();

  const dispatch = useAppDispatch();
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const columns = useAppSelector((state) => state.board.columns);
  const tasks = useAppSelector((state) => state.board.tasks);

  const [columnMaxOrder, setColumnMaxOrder] = useState(0);
  const [taskMaxOrder, setTaskMaxOrder] = useState(0);

  const boardData = useAppSelector((state) =>
    state.dashboard.boards.find((board) => board._id === id)
  );

  useEffect(() => {
    const order = columns.filter((column) => column.boardId === id).length;
    setColumnMaxOrder(order);
  }, [columns, id]);

  useEffect(() => {
    const order = tasks.filter((task) => task.columnId === id).length;
    setTaskMaxOrder(order);
  }, [tasks, id]);

  useEffect(() => {
    if (boardData && type === 'editBoard') {
      const data = parseBoardDescription(boardData);
      setValue('deskName', data.name);
      setValue('deskDescription', data.description);
    }
    if (type === 'editTask') {
      const task = tasks.find((task) => task._id === id);
      setValue('deskName', task?.title);
      setValue('deskDescription', task?.description);
    }
  }, [boardData, type, setValue]);

  const onSubmit = () => {
    const name = watch('deskName');
    const description = watch('deskDescription');
    const title = { name, description };

    switch (type) {
      case MODAL_NEW_TYPES.newBoard: {
        dispatch(createBoard({ title: JSON.stringify(title), owner: userId, users: [] }));
        break;
      }
      case MODAL_NEW_TYPES.editBoard: {
        dispatch(
          editBoard({
            id: id,
            data: { title: JSON.stringify(title), owner: userId, users: [] },
          })
        );
        break;
      }
      case MODAL_NEW_TYPES.newColumn: {
        dispatch(createColumn({ boardId: id, order: columnMaxOrder + 1, title: name }));
        break;
      }
      case MODAL_NEW_TYPES.newTask: {
        dispatch(
          createTask({
            userId,
            description: description,
            boardId,
            columnId: id,
            title: name,
            order: taskMaxOrder + 1,
            // DON'T FORGET TO PASS USERS ARRAY HERE
            users: [],
          })
        );
        break;
      }
      case MODAL_NEW_TYPES.editTask: {
        const task = tasks.find((task) => task._id === id);
        if (task) {
          const { order, boardId, columnId } = task;
          dispatch(
            editTask({
              _id: id,
              title: name,
              description: description,
              userId,
              order,
              boardId,
              columnId,
              // DON'T FORGET TO PASS USERS ARRAY HERE
              users: [],
            })
          );
        }
        break;
      }
      default:
        return;
    }

    setModal(false);
  };

  return (
    <Overlay>
      <div className={classes.container}>
        <div onClick={() => setModal(false)} className={classes.exit} />
        <h2 className={classes.heading}>{DICTIONARY[type as DictionaryKeys][lang]}</h2>
        <UserSelect />

        <form className={classes.form} onSubmit={handleSubmit(onSubmit)} id="form">
          <div className={classes.input__wrapper}>
            {isEdit ? <span>{DICTIONARY.title[lang]}</span> : null}
            <input
              className={classes.input}
              {...register('deskName')}
              type="text"
              placeholder={isEdit ? '' : DICTIONARY.title[lang]}
              required
            />
          </div>
          {type === 'newColumn' ? null : (
            <div className={classes.input__wrapper}>
              {isEdit ? <span>{DICTIONARY.description_placeholder[lang]}</span> : null}
              <textarea
                className={`${classes.input} ${classes.textarea}`}
                {...register('deskDescription')}
                placeholder={isEdit ? '' : DICTIONARY.description_placeholder[lang]}
                maxLength={150}
                required={type === 'newTask'}
              />
            </div>
          )}
        </form>

        <Button formID="form" type={isEdit ? 'save_profile' : 'add'} link={false} color={'blue'} />
      </div>
    </Overlay>
  );
};

export default ModalDesk;
