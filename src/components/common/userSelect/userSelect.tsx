import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import classes from './userSelect.module.scss';

const UserSelect = () => {
  const users = useAppSelector((state) => state.users.users);
  return <div></div>;
};

export default UserSelect;
