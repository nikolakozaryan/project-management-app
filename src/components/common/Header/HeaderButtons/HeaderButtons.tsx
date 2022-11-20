import React from 'react';
import { HEADER_BUTTONS } from '../../../../constants/HeaderButtonsConstants';
import Button from '../../Button/Button';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import classes from './HeaderButtons.module.scss';

const HeaderButtons = () => (
  <div className={classes.container}>
    <Button type={HEADER_BUTTONS.login} link={true} />
    <Button type={HEADER_BUTTONS.registration} link={true} header={true} />
    {/* <Button type={HEADER_BUTTONS.registration} link={false} header={true} color={'blue'} /> */}
    <LanguageSelect />
  </div>
);

export default HeaderButtons;
