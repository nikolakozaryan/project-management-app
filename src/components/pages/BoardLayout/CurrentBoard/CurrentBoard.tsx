import React, { useEffect, useState } from 'react';
import classes from './CurrentBoard.module.scss';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../../app/hooks';
import { getColumns, getTasks } from '../../../../features/board/boardSlice';
import NewItem from '../../../common/NewItem/NewItem';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import Column from '../Column/Column';
import Loader from '../../../common/Loader/Loader';

const CurrentBoard = () => {
  const loading = useAppSelector((state) => state.board.loading);
  const boardId = useBoardID();
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const getBoardData = async (boardId: string) => {
    await dispatch(getColumns(boardId));
    await dispatch(getTasks(boardId));
  };

  useEffect(() => {
    if (!isInitialized) getBoardData(boardId);
    setIsInitialized(true);
  }, [isInitialized]);

  return (
    <div className={classes.board}>
      {loading ? <Loader /> : null}
      {showAddModal ? <ModalDesk type="newColumn" id={boardId} setModal={setShowAddModal} /> : null}
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
