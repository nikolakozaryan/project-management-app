import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Loader from '../../components/common/Loader/Loader';
import { getBoardsList } from '../../features/dashboard/dashboardSlice';
import DeskLayout from '../../components/pages/DeskLayout/DeskLayout';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.dashboard.boards);
  const message = useAppSelector((state) => state.dashboard.errorMessage);
  const isLoading = useAppSelector((state) => state.dashboard.loading);

  useEffect(() => {
    if (!boards.length && message !== 'success') dispatch(getBoardsList());
  }, [boards.length, dispatch, message]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <DeskLayout boards={boards} />
    </>
  );
};

export default Dashboard;
