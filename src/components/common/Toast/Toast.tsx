import React, { FC } from 'react';
import classes from './Toast.module.scss';

const Toast: FC<{ error: string }> = ({ error }) => <div className={classes.toast}>{error}</div>;

export default Toast;
