import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './LoginInput.module.scss';

const LoginInput = () => {
  const methods = useFormContext();

  return (
    <input
      {...methods.register('login')}
      placeholder="Логин"
      className={classes.input}
      type="text"
    />
  );
};

export default LoginInput;
