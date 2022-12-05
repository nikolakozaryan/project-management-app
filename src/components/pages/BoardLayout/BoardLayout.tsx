import React, { useEffect, useState } from 'react';
import classes from './BoardLayout.module.scss';
import { Link } from 'react-router-dom';
import CurrentBoard from './CurrentBoard/CurrentBoard';
<<<<<<< HEAD
import { DragDropContext, DropResult, OnDragEndResponder } from 'react-beautiful-dnd';
=======
>>>>>>> d2039b5720c2d82bc929ccb1bd6cee7a43b41dec
import { useAppDispatch, useAppSelector, useBoardID } from '../../../app/hooks';
import { getBoardsList } from '../../../features/dashboard/dashboardSlice';
import { parseBoardDescription } from '../../../common/functions/parseBoardDescription';
import { resetState } from '../../../features/board/boardSlice';

const BoardLayout = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const boardId = useBoardID();
  const boardData = useAppSelector((state) =>
    state.dashboard.boards.find((board) => board._id === boardId)
  );

<<<<<<< HEAD
  const onDragEnd = (result: DropResult) => {};

=======
>>>>>>> d2039b5720c2d82bc929ccb1bd6cee7a43b41dec
  useEffect(() => {
    if (!boardData) dispatch(getBoardsList());
    else {
      const { name } = parseBoardDescription(boardData);
      setTitle(name);
    }
  }, [boardData, dispatch]);

  return (
<<<<<<< HEAD
    <DragDropContext onDragEnd={onDragEnd}>
      <section className={`${classes.board} section`}>
        <div className={classes.board__container}>
          <div className={classes.board__headingContainer}>
            <Link
              to="/dashboard"
              className={classes.board__link}
              onClick={() => dispatch(resetState())}
            />
            <h2 className={classes.board__heading}>{title}</h2>
          </div>
          <CurrentBoard />
        </div>
      </section>
    </DragDropContext>
=======
    <section className={`${classes.board} section`}>
      <div className={classes.board__container}>
        <div className={classes.board__headingContainer}>
          <Link
            to="/dashboard"
            className={classes.board__link}
            onClick={() => dispatch(resetState())}
          />
          <h2 className={classes.board__heading}>{title}</h2>
        </div>
        <CurrentBoard />
      </div>
    </section>
>>>>>>> d2039b5720c2d82bc929ccb1bd6cee7a43b41dec
  );
};

export default BoardLayout;
