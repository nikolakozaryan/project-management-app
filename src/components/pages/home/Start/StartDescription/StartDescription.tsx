import React from 'react';
import { HEADER_BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './StartDescription.module.scss';
import Button from '../../../../common/Button/Button';

const StartDescription = () => (
  <div className={classes.container}>
    <h1 className={classes.header}>RS Project Management</h1>
    <p className={classes.description}>
      Сервис, позволяющий собрать все рабочие задания команды в едином пространстве и достичь новых
      высот продуктивности.
    </p>
    <Button type={HEADER_BUTTONS.start} />
  </div>
);
export default StartDescription;
