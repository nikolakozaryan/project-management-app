import React, { FC } from 'react';
import classes from './Overlay.module.scss';

const Overlay: FC<{ children: JSX.Element }> = ({ children }) => (
  <div className={classes.overlay}>{children}</div>
);

export default Overlay;
