import React from 'react';
import classes from './modalDelete.module.scss';
import Button from '../Button/Button';
import { BUTTONS } from '../../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../constants/Dictionary/Dictionary';
import { removeBoard } from '../../../features/dashboard/dashboardSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { MODAL_DELETE_TYPES } from '../../../constants/Modal';

const ModalDelete: React.FC<{
  id: string;
  type: string;
  setmodal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ id, type, setmodal }) => {
  const dispatch = useAppDispatch();
  const lang: Languages = useAppSelector((state) => state.language.lang);

  const handleClick = () => {
    switch (type) {
      case MODAL_DELETE_TYPES.deleteBoard: {
        dispatch(removeBoard(id));
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
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>
          {DICTIONARY.deleteQuestion[lang as Languages]}{' '}
          {DICTIONARY[type as DictionaryKeys][lang as Languages]}?
        </h2>
        <div onClick={() => setmodal(false)} className={classes.exit}>
          x
        </div>
      </div>
      <div className={classes.buttons}>
        <Button
          type={BUTTONS.cancel as DictionaryKeys}
          link={false}
          onClick={() => setmodal(false)}
        />
        <Button
          type={BUTTONS.delete as DictionaryKeys}
          link={false}
          color={'red'}
          onClick={() => {
            setmodal(false);
            handleClick();
          }}
        />
      </div>
    </div>
  );
};

export default ModalDelete;
