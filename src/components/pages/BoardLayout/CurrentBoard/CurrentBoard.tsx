import React, { FC, useEffect, useState } from 'react';
import { MyProps } from './types';
import classes from './CurrentBoard.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { getColumns } from '../../../../features/board/boardSlice';
import NewItem from '../../../common/NewItem/NewItem';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import Column from '../Column/Column';
import { Droppable, DropResult, DragDropContext } from 'react-beautiful-dnd';

const CurrentBoard: FC<MyProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const [showAddModal, setShowAddModal] = useState(false);
  const [allColumns, setAllColumns] = useState(columns);

  console.log(allColumns, 'a;;', columns);

  useEffect(() => {
    dispatch(getColumns(id));
  }, []);

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

    console.log(newBoardIds);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.board}>
        {showAddModal ? <ModalDesk type="newColumn" id={id} setModal={setShowAddModal} /> : null}
        <div className={classes.columns}>
          <Droppable droppableId={id}>
            {(provided) => (
              <div
                className={classes.columns__container}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {columns.map((column, index) => (
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
