import React, { FC } from 'react';
import classes from './Column.module.scss';
import ColumnHeading from './ColumnHeading/ColumnHeading';

type MyProps = {
  title: string;
  columnId: string;
};

const Column: FC<MyProps> = ({ title, columnId }) => {
  return (
    <div className={classes.column}>
      <ColumnHeading title={title} id={columnId} />
    </div>
  );
};

export default Column;
