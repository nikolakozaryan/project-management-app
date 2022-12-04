import React, { useEffect, useState } from 'react';
import classes from './CurrentBoard.module.scss';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../../app/hooks';
import { getColumns, getTasks } from '../../../../features/board/boardSlice';
import NewItem from '../../../common/NewItem/NewItem';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import Column from '../Column/Column';
import { Droppable, DropResult, DragDropContext } from 'react-beautiful-dnd';
import Loader from '../../../common/Loader/Loader';

const CurrentBoard = () => {
  const loading = useAppSelector((state) => state.board.loading);
  const boardId = useBoardID();
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const [showAddModal, setShowAddModal] = useState(false);
  const [allColumns, setAllColumns] = useState(columns);

  console.log(allColumns, 'a;;', columns);
  const [isInitialized, setIsInitialized] = useState(false);

  const getBoardData = async (boardId: string) => {
    await dispatch(getColumns(boardId));
    await dispatch(getTasks(boardId));
  };

  useEffect(() => {
    if (!isInitialized) getBoardData(boardId);
    setIsInitialized(true);
  }, [isInitialized]);

  useEffect(() => {
    setAllColumns(columns);
  }, [columns]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    const newBoardIds = allColumns.map((item) => item._id);
    newBoardIds.splice(source.index, 1);
    newBoardIds.splice(destination.index, 0, draggableId);
    const newColumn = newBoardIds
      .map((item) => allColumns.filter((column) => column._id === item))
      .flat(1);
    console.log(newColumn);
    setAllColumns(newColumn);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.board}>
        {loading ? <Loader /> : null}
        {showAddModal ? (
          <ModalDesk type="newColumn" id={boardId} setModal={setShowAddModal} />
        ) : null}
        <div className={classes.columns}>
          <Droppable droppableId={boardId} direction="horizontal">
            {(provided) => (
              <div
                className={classes.columns__container}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {allColumns.map((column, index) => (
                  <Column
                    key={column._id}
                    title={column.title}
                    columnId={column._id}
                    index={index}
                  />
                ))}

                {provided.placeholder}
                <NewItem setIsModalAdd={setShowAddModal} type="column" />
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default CurrentBoard;
