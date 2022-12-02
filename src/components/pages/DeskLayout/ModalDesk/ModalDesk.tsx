import React, { useEffect } from 'react';
import classes from './ModalDesk.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../../constants/Dictionary/Dictionary';
import { createBoard } from '../../../../features/dashboard/dashboardSlice';
import { editBoard } from '../../../../features/dashboard/dashboardSlice';
import { MODAL_NEW_TYPES } from '../../../../constants/Modal';
import UserSelect from '../../../common/userSelect/userSelect';
import Overlay from '../../../common/Overlay/Overlay';
import { BoardContent, MyProps } from './types';
import { createColumn } from '../../../../features/board/boardSlice';

const ModalDesk: React.FC<MyProps> = ({ type, id, setModal }) => {
  const userId = localStorage.getItem('user_id') as string;
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, setValue } = useForm();
  const isEdit = type === 'editBoard';

  const boardData = useAppSelector((state) =>
    state.dashboard.boards.find((board) => board._id === id)
  );

  const columnMaxOrder = useAppSelector((state) => {
    const borderColumns = state.board.columns.filter((column) => column.boardId === id);
    const length = borderColumns.length;
    switch (length) {
      case 0:
        return 0;
        break;
      case 1:
        return borderColumns[0].order;
        break;
      default:
        const sortedByOrder = borderColumns.sort((a, b) => b.order - a.order);
        const maxOrder = sortedByOrder[0].order;
        return maxOrder;
    }
  });

  useEffect(() => {
    if (boardData && isEdit) {
      const data = JSON.parse(boardData.title) as BoardContent;
      setValue('deskName', data.name);
      setValue('deskDescription', data.description);
    }
  }, [boardData, isEdit, setValue]);

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
              />
            </div>
          )}
        </form>

        <Button formID="form" type="add" link={false} color={'blue'} />
      </div>
    </Overlay>
  );
};

export default ModalDesk;
