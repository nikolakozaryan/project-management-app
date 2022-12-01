import React, { FC, useEffect, useState } from 'react';
import { MyProps } from './types';
import classes from './CurrentBoard.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getColumns } from '../../../../features/board/boardSlice';
import NewItem from '../../../common/NewItem/NewItem';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import Column from '../Column/Column';

const CurrentBoard: FC<MyProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    dispatch(getColumns(id));
  }, []);

  return (
    <div className={classes.board}>
      {showAddModal ? <ModalDesk type="newColumn" id={id} setModal={setShowAddModal} /> : null}
      <div className={classes.columns}>
        <div className={classes.columns__container}>
          {columns.map((column) => (
            <Column key={column._id} title={column.title} columnId={column._id} />
          ))}
          <NewItem setIsModalAdd={setShowAddModal} type="column" />
        </div>
      </div>
    </div>
  );
};

export default CurrentBoard;
