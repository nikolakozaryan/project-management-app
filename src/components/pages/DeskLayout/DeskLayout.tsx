import React, { useState } from 'react';
import classes from './DeskLayout.module.scss';
import Desk from './Desk/Desk';
import ModalDesk from './ModalDesk/ModalDesk';
import { IBoard } from '../../../features/dashboard/interface';
import ModalDelete from '../../common/modalDelete/modalDelete';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import { MODAL_NEW_TYPES, MODAL_DELETE_TYPES } from '../../../constants/Modal';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import NewItem from '../../common/NewItem/NewItem';

const DeskLayout: React.FC<{ boards: IBoard[] }> = ({ boards }) => {
  const lang: string = useAppSelector((state) => state.language.lang);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [id, setId] = useState('');

  return (
    <section className={`${classes.dashboard} section`}>
      {isModalAdd && (
        <ModalDesk
          setModal={setIsModalAdd}
          type={MODAL_NEW_TYPES.newBoard}
          id={id}
          hasSelect={false}
        />
      )}
      {isModalEdit && (
        <ModalDesk
          setModal={setIsModalEdit}
          type={MODAL_NEW_TYPES.editBoard}
          id={id}
          hasSelect={true}
        />
      )}
      {isModalDelete && (
        <ModalDelete type={MODAL_DELETE_TYPES.deleteBoard} id={id} setModal={setIsModalDelete} />
      )}

      <div className={classes.dashboard__container}>
        <h2 className={classes.dashboard__heading}>{DICTIONARY.boards[lang as Languages]}</h2>
        <div className={classes.boards__container}>
          <div className={classes.boards}>
            <NewItem setIsModalAdd={setIsModalAdd} type="desk" />
            {boards.map((item) => (
              <Desk
                edit={setIsModalEdit}
                info={item}
                key={item._id}
                changeId={setId}
                setDeleteModal={setIsModalDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeskLayout;
