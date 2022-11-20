import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { Languages } from '../../../../../constants/Dictionary';
import { LANGUAGES } from '../../../../../constants/Languages';
import { changeLanguage } from '../../../../../features/language/languageSlice';
import classes from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  const languageChange = useAppDispatch();
  const language: Languages = useAppSelector((state) => state.language.lang);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    localStorage.setItem('lang', value);
    languageChange(changeLanguage(value));
  };

  return (
    <select
      onChange={handleChange}
      className={classes.container}
      name="language"
      defaultValue={LANGUAGES.ru}
    >
      <option value={LANGUAGES.ru} selected={language === LANGUAGES.ru}>
        {LANGUAGES.ru.toLocaleUpperCase()}
      </option>
      <option value={LANGUAGES.en} selected={language === LANGUAGES.en}>
        {LANGUAGES.en.toLocaleUpperCase()}
      </option>
    </select>
  );
};
export default LanguageSelect;
