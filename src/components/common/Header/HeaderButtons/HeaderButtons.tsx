import React from 'react';
import { HEADER_BUTTONS } from '../../../../constants/HeaderButtonsConstants';
import Button from '../../Button/Button';
import LanguageSelect from './LanguageSelect/LanguageSelect';

const HeaderButtons = () => (
  <>
    <Button type={HEADER_BUTTONS.login} />
    <Button type={HEADER_BUTTONS.registration} />
    <LanguageSelect />
  </>
);

export default HeaderButtons;
