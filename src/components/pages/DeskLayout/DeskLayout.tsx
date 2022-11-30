import React from 'react';
import classes from './DeskLayout.module.scss';
import Desk from './Desk/Desk';
import ModalDesk from './ModalDesk/ModalDesk';
import NewDesk from './NewDesk/NewDesk';
import { IBoard } from '../../../features/dashboard/interface';
import ModalDelete from '../../common/modalDelete/modalDelete';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import { MODAL_NEW_TYPES, MODAL_DELETE_TYPES } from '../../../constants/Modal';
import { useAppSelector } from '../../../app/hooks';

const DeskLayout: React.FC<{ boards: IBoard[] }> = ({ boards }) => {
  const lang: string = useAppSelector((state) => state.language.lang);
  const [isModalAdd, setIsModalAdd] = React.useState(false);
  const [isModalEdit, setIsModalEdit] = React.useState(false);
  const [isModalDelete, setIsModalDelete] = React.useState(false);
  const [id, setId] = React.useState('');

  React.useEffect(() => {
    isModalAdd
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [isModalAdd]);

  React.useEffect(() => {
    console.log('here', boards);
  }, [boards]);

  return (
    <>
      <div
        onClick={() => {
          setIsModalAdd(false);
          setIsModalEdit(false);
          setIsModalDelete(false);
        }}
        className={isModalAdd || isModalEdit || isModalDelete ? classes.shadowContaner : ''}
      ></div>
      {isModalAdd && <ModalDesk setModal={setIsModalAdd} type={MODAL_NEW_TYPES.newBoard} id={id} />}
      {isModalEdit && (
        <ModalDesk setModal={setIsModalEdit} type={MODAL_NEW_TYPES.editBoard} id={id} />
      )}
      {isModalDelete && (
        <ModalDelete type={MODAL_DELETE_TYPES.deleteBoard} id={id} setmodal={setIsModalDelete} />
      )}

      <div className={classes.container}>
        <h1>{DICTIONARY.boards[lang as Languages]}</h1>
        <div className={classes.layout}>
          {boards.map((item) => {
            console.log(item, 'item');
            return (
              <Desk
                edit={setIsModalEdit}
                info={item}
                key={item._id}
                changeId={setId}
                setDeleteModal={setIsModalDelete}
              />
            );
          })}
          <NewDesk setIsModalAdd={setIsModalAdd} />
        </div>
      </div>
    </>
  );
};

export default DeskLayout;
