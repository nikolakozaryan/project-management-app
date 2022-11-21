import React, { FC, useState } from 'react';
import { useAppSelector, useInput } from '../../../app/hooks';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import { ERRORS_DICTIONARY } from '../../../constants/Dictionary/ErrorsDictionary';
import classes from './FormInput.module.scss';
import { InputType, MyProps } from './types';
import VisibilityToggler from './VisibilityToggler/VisibilityToggler';

const FormInput: FC<MyProps> = ({ type, validate }) => {
  const { methods, invalid, error } = useInput(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const lang = useAppSelector((state) => state.language.lang) as Languages;

  const getInputType = (type: InputType): string =>
    type !== 'password' || isPasswordVisible ? 'text' : 'password';

  const toggleVisibility = (value: boolean) => {
    setIsPasswordVisible(value);
  };

  const validation = {
    login: {
      minLength: { value: 4, message: ERRORS_DICTIONARY.login_short[lang] },
      maxLength: { value: 16, message: ERRORS_DICTIONARY.login_long[lang] },
      validate: {
        start: (v: string) => /(^([a-z]|[A-Z]))/.test(v) || ERRORS_DICTIONARY.login_start[lang],
        letters: (v: string) =>
          /(?=.*([a-z]|[A-Z]|[0-9]))/.test(v) || ERRORS_DICTIONARY.login_letters[lang],
      },
    },
    name: {
      minLength: { value: 4, message: ERRORS_DICTIONARY.name_short[lang] },
      maxLength: { value: 20, message: ERRORS_DICTIONARY.name_long[lang] },
      validate: {
        start: (v: string) => /^[A-ZА-Я]/.test(v) || ERRORS_DICTIONARY.name_start[lang],
        letters: (v: string) => /^.[a-zа-я]+$/.test(v) || ERRORS_DICTIONARY.name_letters[lang],
      },
    },
    password: {
      minLength: { value: 6, message: ERRORS_DICTIONARY.password_short[lang] },
      maxLength: { value: 15, message: ERRORS_DICTIONARY.password_long[lang] },
      validate: {
        numbers: (v: string) => /(?=.*[0-9])/.test(v) || ERRORS_DICTIONARY.password_numbers[lang],
        letters: (v: string) =>
          /(?=.*([a-z]|[A-Z]))/.test(v) || ERRORS_DICTIONARY.password_letters[lang],
        uppercase: (v: string) => /(?=.*[A-Z])/.test(v) || ERRORS_DICTIONARY.password_uc[lang],
        lowercase: (v: string) => /(?=.*[a-z])/.test(v) || ERRORS_DICTIONARY.password_lc[lang],
      },
    },
  };

  return (
    <div className={classes.input__wrapper}>
      <input
        {...methods.register(type, validate ? validation[type] : {})}
        placeholder={DICTIONARY[type][lang]}
        type={getInputType(type)}
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
      />
      {type === 'password' && <VisibilityToggler toggle={toggleVisibility} />}
      {invalid && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default FormInput;
