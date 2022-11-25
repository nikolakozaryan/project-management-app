import { FC, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { MyState, ParsedToken } from './types';

const AuthVerify: FC<MyState> = ({ logout }) => {
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('user_token');

    if (token) {
      const decodedToken = jwt_decode(token) as ParsedToken;

      if (decodedToken.exp * 1000 < Date.now()) logout();
    }
  }, [location, logout]);

  return null;
};

export default AuthVerify;
