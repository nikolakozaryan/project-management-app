import React, { FC, useState } from 'react';
import { useInput } from '../../../app/hooks';
import classes from './FormInput.module.scss';
import { MyProps } from './types';
import validation from './validation';

const FormInput: FC<MyProps> = ({ type, validate }) => {
  const { methods, invalid, error } = useInput(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const getInputType = (type: string): string => {
    return type !== 'password' || isPasswordVisible ? 'text' : 'password';
  };

  const VisibilityToggler: JSX.Element = (
    <span
      className={`${classes.toggler} ${
        isPasswordVisible ? classes.toggler_visible : classes.toggler_invisible
      }`}
      onMouseDown={() => setIsPasswordVisible(true)}
      onMouseUp={() => setIsPasswordVisible(false)}
    />
  );

  return (
    <div className={classes.input__wrapper}>
      <input
        {...methods.register(type, validate ? validation[type] : {})}
        placeholder={type}
        type={getInputType(type)}
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
      />
      {type === 'password' && VisibilityToggler}
      {invalid && (
        <p className={classes.error}>
          {type} должен {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
