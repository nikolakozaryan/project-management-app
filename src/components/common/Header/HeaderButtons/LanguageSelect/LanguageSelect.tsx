import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { Languages } from '../../../../../constants/Dictionary/Dictionary';
import { LANGUAGES } from '../../../../../constants/Languages';
import { changeLanguage } from '../../../../../features/language/languageSlice';
import classes from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  const dispatch = useAppDispatch();
  const lang: Languages = useAppSelector((state) => state.language.lang);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    localStorage.setItem('lang', value);
    dispatch(changeLanguage(value));
  };

  return (
    <select
      onChange={handleChange}
      className={classes.container}
      name="language"
      defaultValue={lang}
    >
      <option value={LANGUAGES.ru}>{LANGUAGES.ru.toLocaleUpperCase()}</option>
      <option value={LANGUAGES.en}>{LANGUAGES.en.toLocaleUpperCase()}</option>
    </select>
  );
};
export default LanguageSelect;
