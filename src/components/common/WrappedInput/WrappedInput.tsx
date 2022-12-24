import React, { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import FormInput from '../FormInput/FormInput';
import { MyProps } from './types';
import classes from './WrappedInput.module.scss';

const WrappedInput: FC<MyProps> = ({ type }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;

  return (
    <div className={classes.input__label}>
      <span>{DICTIONARY[type][lang]}</span>
      <FormInput type={type} validate={true} />
    </div>
  );
};

export default WrappedInput;
