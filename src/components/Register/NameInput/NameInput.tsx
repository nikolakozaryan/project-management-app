import React from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './NameInput.module.scss';

const NameInput = () => {
  const methods = useFormContext();

  return (
    <input {...methods.register('name')} placeholder="Имя" className={classes.input} type="text" />
  );
};

export default NameInput;
