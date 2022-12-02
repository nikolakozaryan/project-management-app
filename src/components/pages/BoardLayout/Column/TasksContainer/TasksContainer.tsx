import React, { FC } from 'react';

type MyProps = { children: JSX.Element };

const TasksContainer: FC<MyProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default TasksContainer;
