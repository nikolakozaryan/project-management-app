import React from 'react';
import { MyProps } from './types';
import classes from './Button.module.scss';

const Button = ({ value }: MyProps) => <button className={classes.button}>{value}</button>;

export default Button;
