import React, { FC } from 'react';
import classes from './HeadingText.module.scss';
import { MyProps } from './types';

const HeadingText: FC<MyProps> = ({ title, handleEditMode, handleDeleteColumn }) => (
  <>
    <h5 onClick={handleEditMode} className={classes.heading} title={title}>
      {title}
    </h5>
    <span onClick={handleDeleteColumn} className={classes.heading__delete} />
  </>
);

export default HeadingText;
