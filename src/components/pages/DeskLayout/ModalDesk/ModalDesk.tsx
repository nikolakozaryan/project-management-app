import React from 'react';
import classes from './ModalDesk.module.scss';
import { useForm } from 'react-hook-form';
import Button from '../../../common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../../constants/Dictionary/Dictionary';
import { createBoard } from '../../../../features/dashboard/dashboardSlice';
import { editBoard } from '../../../../features/dashboard/dashboardSlice';
import { MODAL_NEW_TYPES } from '../../../../constants/Modal';
import UserSelect from '../../../common/userSelect/userSelect';

const ModalDesk: React.FC<{
  type: string;
  id: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ type, id, setModal }) => {
  const lang: Languages = useAppSelector((state) => state.language.lang);
  const dispatch = useAppDispatch();
  const userId = localStorage.getItem('user_id');

  const { register, handleSubmit, watch } = useForm();
  const onSubmit = () => {
    const name = watch('deskName');
    const description = watch('deskDescription');
    const title = { name: name, description: description };
    switch (type) {
      case MODAL_NEW_TYPES.newBoard: {
        dispatch(createBoard({ title: JSON.stringify(title), owner: userId as string, users: [] }));
        break;
      }
      case MODAL_NEW_TYPES.editBoard: {
        dispatch(
          editBoard({
            id: id,
            data: { title: JSON.stringify(title), owner: userId as string, users: [] },
          })
        );
        break;
      }
      case MODAL_NEW_TYPES.newTask: {
        console.log('dispatch here');
        break;
      }
      default:
        return;
    }
    setModal(false);
  };
  console.log(type, 'dict');
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>{DICTIONARY[type as DictionaryKeys][lang as Languages]}</h2>
        <div onClick={() => setModal(false)} className={classes.exit}>
          x
        </div>
      </div>
      <UserSelect />
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <input className={classes.deskName} {...register('deskName')} type="text" />
        <input className={classes.deskDescription} {...register('deskDescription')} type="text" />
      </form>
      <Button formID={'form'} type="add" link={false} color={'blue'}></Button>
    </div>
  );
};

export default ModalDesk;
