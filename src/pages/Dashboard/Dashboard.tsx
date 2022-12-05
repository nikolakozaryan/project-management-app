import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loader from '../../components/common/Loader/Loader';
import { getBoardsList, resetError } from '../../features/dashboard/dashboardSlice';
import DeskLayout from '../../components/pages/DeskLayout/DeskLayout';
import { Navigate, useLocation } from 'react-router-dom';
import Toast from '../../components/common/Toast/Toast';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.dashboard.boards);
  const errorMessage = useAppSelector((state) => state.dashboard.errorMessage);
  const isLoading = useAppSelector((state) => state.dashboard.loading);
  const isAuth = useAppSelector((state) => state.signin.login);
  const [showError, setShowError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!boards.length && errorMessage !== 'success') dispatch(getBoardsList());
  }, [boards.length, dispatch, errorMessage]);

  useEffect(() => {
    if (errorMessage === 'success' || !errorMessage) setShowError(false);
    else setShowError(true);
  }, [errorMessage]);

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch, location]);

  if (!isAuth) return <Navigate to="/home" />;

  return (
    <>
      {isLoading ? <Loader /> : null}
      {showError && <Toast error={errorMessage} />}
      <DeskLayout boards={boards} />
    </>
  );
};

export default Dashboard;
