import React, { useEffect, useState } from 'react';
import classes from './CurrentBoard.module.scss';
import { useAppDispatch, useAppSelector, useBoardID } from '../../../../app/hooks';
import { getColumns, getTasks } from '../../../../features/board/boardSlice';
import NewItem from '../../../common/NewItem/NewItem';
import ModalDesk from '../../DeskLayout/ModalDesk/ModalDesk';
import Column from '../Column/Column';
import { Droppable, DropResult, DragDropContext } from 'react-beautiful-dnd';
import Loader from '../../../common/Loader/Loader';
import { editColumnsOrder } from '../../../../features/board/boardSlice';
import { editTasksOrder } from '../../../../features/board/boardSlice';
import { editTask } from '../../../../features/board/boardSlice';
import { ITask } from '../../../../features/board/interface';

const CurrentBoard = () => {
  const loading = useAppSelector((state) => state.board.loading);
  const boardId = useBoardID();
  const dispatch = useAppDispatch();
  const columns = useAppSelector((state) => state.board.columns);
  const tasksStore = useAppSelector((state) => state.board.tasks);
  const [showAddModal, setShowAddModal] = useState(false);
  const [allColumns, setAllColumns] = useState(columns);
  const [isInitialized, setIsInitialized] = useState(false);
  const [tasks, setTasks] = useState(tasksStore);

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

  useEffect(() => {
    console.log('whatawet');
    setTasks(tasksStore);
  }, [tasksStore]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (type === 'tasks') {
      const start = allColumns.filter((item) => item._id === source.droppableId)[0];
      const finish = allColumns.filter((item) => item._id === destination.droppableId)[0];
      if (start === finish) {
        const tasksColumn = tasks.filter((item) => item.columnId === start._id);
        const newBoardIds = tasksColumn.map((item) => item._id);
        newBoardIds.splice(source.index, 1);
        newBoardIds.splice(destination.index, 0, draggableId);
        const newColumn = newBoardIds
          .map((item) => tasksColumn.filter((column) => column._id === item))
          .flat(1);
        tasks.map((item) => {
          !newColumn.includes(item) ? newColumn.push(item) : null;
          return item;
        });
        const newOrderColumn = newColumn.map((item, index) => {
          return {
            _id: item._id,
            order: index + 1,
            columnId: start._id,
          };
        });
        console.log(newOrderColumn, 'new');
        dispatch(editTasksOrder(newOrderColumn));
        setTasks(newColumn);
      } else if (start !== finish) {
        const startTasks = tasks.filter((item) => item.columnId === start._id);
        const newItem = { ...startTasks[source.index], columnId: finish._id };
        dispatch(editTask(newItem));
        dispatch(getTasks(boardId));
      }
    } else {
      const newBoardIds = allColumns.map((item) => item._id);
      newBoardIds.splice(source.index, 1);
      newBoardIds.splice(destination.index, 0, draggableId);
      const newColumn = newBoardIds
        .map((item) => allColumns.filter((column) => column._id === item))
        .flat(1);
      setAllColumns(newColumn);
      const newOrderColumn = newColumn.map((item, index) => {
        return {
          _id: item._id,
          order: index + 1,
        };
      });
      dispatch(editColumnsOrder(newOrderColumn));
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.board}>
        {/* {loading ? <Loader /> : null} */}
        {showAddModal ? (
          <ModalDesk type="newColumn" id={boardId} setModal={setShowAddModal} />
        ) : null}
        <div className={classes.columns}>
          <Droppable droppableId={boardId} direction="horizontal" type="column">
            {(provided) => (
              <div
                className={classes.columns__container}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {allColumns.map((column, index) => (
                  <Column
                    boardId={column.boardId}
                    key={column._id}
                    title={column.title}
                    columnId={column._id}
                    index={index}
                    tasks={tasks}
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
