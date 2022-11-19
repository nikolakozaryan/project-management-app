import React, { useState } from 'react';
import { useInput } from '../../../hooks/useInput';
import classes from './PasswordInput.module.scss';

const PasswordInput = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { methods, invalid, error } = useInput('password');

  return (
    <div className={classes.input__wrapper}>
      <input
        {...methods.register('password', {
          minLength: { value: 6, message: 'быть не короче 6 символов' },
          maxLength: { value: 12, message: 'быть не длинее 12 символов' },
          validate: {
            numbers: (v) => /(?=.*[0-9])/.test(v) || 'содержать цифры',
            letters: (v) => /(?=.*([a-z]|[A-Z]))/.test(v) || 'содержать латинские буквы',
            uppercase: (v) => /(?=.*[A-Z])/.test(v) || 'содержать большие буквы',
            lowercase: (v) => /(?=.*[a-z])/.test(v) || 'содержать маленькие буквы',
          },
        })}
        placeholder="Пароль"
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
        type={isPasswordVisible ? 'text' : 'password'}
      />
      <span
        className={`${classes.toggler} ${
          isPasswordVisible ? classes.toggler_visible : classes.toggler_invisible
        }`}
        onMouseDown={() => setIsPasswordVisible(true)}
        onMouseUp={() => setIsPasswordVisible(false)}
      />
      {error && invalid ? <p className={classes.error}>Пароль должен {error}</p> : null}
    </div>
  );
};

export default PasswordInput;
