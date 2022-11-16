import React from 'react';
import { LANGUAGES } from '../../../../../constants/Languages';
import classes from './LanguageSelect.module.scss';

const LanguageSelect = () => (
  <select className={classes.container} name="language">
    <option value={LANGUAGES.ru} selected>
      {LANGUAGES.ru}
    </option>
    <option value={LANGUAGES.en}>{LANGUAGES.en}</option>
  </select>
);

export default LanguageSelect;
