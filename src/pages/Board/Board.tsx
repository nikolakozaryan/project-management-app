import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector, useAuth } from '../../app/hooks';
import Toast from '../../components/common/Toast/Toast';
import BoardLayout from '../../components/pages/BoardLayout/BoardLayout';

const Board = () => {
  const isAuth = useAuth();
  const errorMessage = useAppSelector((state) => state.board.errorMessage);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (errorMessage === 'success' || !errorMessage) setShowError(false);
    else setShowError(true);
  }, [errorMessage]);

  if (!isAuth) return <Navigate to="/home" />;

  return (
    <>
      {showError && <Toast error={errorMessage} />}
      <BoardLayout />
    </>
  );
};

export default Board;
