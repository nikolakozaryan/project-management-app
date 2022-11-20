import React from 'react';
import { BUTTONS } from '../../../../constants/HeaderButtonsConstants';
import Button from '../../Button/Button';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import classes from './HeaderButtons.module.scss';

const HeaderButtons = () => (
  <div className={classes.container}>
    <Button type={BUTTONS.login} link={true} />
    <Button type={BUTTONS.registration} link={true} header={true} />
    <LanguageSelect />
  </div>
);

export default HeaderButtons;
