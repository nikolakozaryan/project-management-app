import React from 'react';
import classes from './FormError.module.scss';
import { IProps } from './interface';

const FormError = ({ value }: IProps) => (
  <div className={classes.error}>
    <div className={classes.error__icon} />
    <span className={classes.error__message}>{value}</span>
  </div>
);

export default FormError;
