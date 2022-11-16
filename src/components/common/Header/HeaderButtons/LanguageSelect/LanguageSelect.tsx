import React from 'react';
import { LANGUAGES } from '../../../../../constants/Languages';

const LanguageSelect = () => (
  <select name="language">
    <option value={LANGUAGES.ru} selected>
      {LANGUAGES.ru}
    </option>
    <option value={LANGUAGES.en}>{LANGUAGES.en}</option>
  </select>
);

export default LanguageSelect;
