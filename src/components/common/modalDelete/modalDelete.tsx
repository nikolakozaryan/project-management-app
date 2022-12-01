import React from 'react';
import classes from './modalDelete.module.scss';
import Button from '../Button/Button';
import { BUTTONS } from '../../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../constants/Dictionary/Dictionary';
import { removeBoard } from '../../../features/dashboard/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { MODAL_DELETE_TYPES } from '../../../constants/Modal';
import { MyProps } from './types';
import Overlay from '../Overlay/Overlay';
import { deleteCurrentUser } from '../../../features/deleteUser/deleteUserSlice';

const ModalDelete: React.FC<MyProps> = ({ id, type, setModal }) => {
  const dispatch = useAppDispatch();
  const lang: Languages = useAppSelector((state) => state.language.lang);

  const handleClick = () => {
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
        console.log(dispatch);
        break;
      }
      case MODAL_DELETE_TYPES.deleteTask: {
        console.log(dispatch);
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
