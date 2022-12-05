import React from 'react';
import classes from './modalDelete.module.scss';
import Button from '../Button/Button';
import { BUTTONS } from '../../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../constants/Dictionary/Dictionary';
import { removeBoard } from '../../../features/dashboard/dashboardSlice';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../app/hooks';
import { MODAL_DELETE_TYPES } from '../../../constants/Modal';
import { MyProps } from './types';
import Overlay from '../Overlay/Overlay';
import { deleteCurrentUser } from '../../../features/deleteUser/deleteUserSlice';
import {
  deleteColumn,
  deleteTask,
  editColumnsOrder,
  editTasksOrder,
} from '../../../features/board/boardSlice';
import { ITask } from '../../../features/board/interface';

const ModalDelete: React.FC<MyProps> = ({ id, type, setModal }) => {
  const dispatch = useAppDispatch();
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const boardId = useBoardID();
  const columns = useAppSelector((state) => state.board.columns);
  const tasks = useAppSelector((state) => state.board.tasks);

  const handleClick = async () => {
    switch (type) {
      case MODAL_DELETE_TYPES.deleteBoard: {
        dispatch(removeBoard(id));
        break;
      }
      case MODAL_DELETE_TYPES.deleteUser: {
        dispatch(deleteCurrentUser(id));
        break;
      }
      case MODAL_DELETE_TYPES.deleteColumn: {
        await dispatch(deleteColumn({ boardId, columnId: id }));
        const columnsToEdit = columns
          .filter((column) => column.boardId === boardId && column._id !== id)
          .map((column, index) => ({ _id: column._id, order: index + 1 }));
        if (columnsToEdit.length) dispatch(editColumnsOrder(columnsToEdit));
        break;
      }
      case MODAL_DELETE_TYPES.deleteTask: {
        const targetTask = tasks.find((task) => task._id === id) as ITask;
        const { columnId } = targetTask;
        await dispatch(deleteTask({ boardId, columnId, taskId: id }));

        const tasksToEdit = tasks
          .filter((task) => task.columnId === columnId && task._id !== id)
          .map((task, index) => ({ columnId, _id: task._id, order: index + 1 }));
        if (tasksToEdit.length) dispatch(editTasksOrder(tasksToEdit));
        break;
      }
      default:
        break;
    }
  };

  return (
    <Overlay>
      <div className={classes.container}>
        <div onClick={() => setModal(false)} className={classes.exit} />
        <h2 className={classes.heading}>
          {DICTIONARY.deleteQuestion[lang]} {DICTIONARY[type as DictionaryKeys][lang]}?
        </h2>
        <div className={classes.buttons}>
          <Button
            type={BUTTONS.cancel as DictionaryKeys}
            link={false}
            onClick={() => setModal(false)}
          />
          <Button
            type={BUTTONS.delete as DictionaryKeys}
            link={false}
            color={'red'}
            onClick={() => {
              setModal(false);
              handleClick();
            }}
          />
        </div>
      </div>
    </Overlay>
  );
};

export default ModalDelete;
