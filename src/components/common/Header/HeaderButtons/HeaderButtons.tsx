import React from 'react';
import { BUTTONS } from '../../../../constants/HeaderButtonsConstants';
import Button from '../../Button/Button';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import classes from './HeaderButtons.module.scss';
import { DictionaryKeys } from '../../../../constants/Dictionary/Dictionary';

const HeaderButtons = () => (
  <div className={classes.container}>
    <Button type={BUTTONS.signin as DictionaryKeys} link={true} />
    <Button type={BUTTONS.signup as DictionaryKeys} link={true} header={true} />
    <LanguageSelect />
  </div>
);

export default HeaderButtons;
