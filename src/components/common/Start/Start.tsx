import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

const Start = () => {
  const isAuth = useAppSelector((state) => state.signin.login);

  return <Navigate to={isAuth ? '/dashboard' : '/signin'} />;
};

export default Start;
