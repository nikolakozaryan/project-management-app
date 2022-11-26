import { FC, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocation } from 'react-router-dom';
import { ParsedToken } from './types';
import { useLogout } from '../../../app/hooks';

const AuthVerify: FC = () => {
  const location = useLocation();
  const logout = useLogout();

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
