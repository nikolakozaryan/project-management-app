import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../app/hooks';

const Start = () => {
  const isAuth = useAuth();

  return <Navigate to={isAuth ? '/dashboard' : '/signin'} />;
};

export default Start;
