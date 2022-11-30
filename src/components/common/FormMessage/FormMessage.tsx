import React from 'react';
import classes from './FormMessage.module.scss';
import { IProps } from './interface';

const FormMessage = ({ value, type }: IProps) => (
  <div className={classes[type]}>
    <div className={classes[`${type}__icon`]} />
    <span className={classes[`${type}__message`]}>{value}</span>
  </div>
);

export default FormMessage;
