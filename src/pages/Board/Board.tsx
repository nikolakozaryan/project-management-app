import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import BoardLayout from '../../components/pages/BoardLayout/BoardLayout';

const Board = () => {
  const isAuth = useAppSelector((state) => state.signin.login);

  if (!isAuth) return <Navigate to="/home" />;
  return <BoardLayout />;
};

export default Board;
