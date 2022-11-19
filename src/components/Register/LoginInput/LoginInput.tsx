import React from 'react';
import { useInput } from '../../../hooks/useInput';
import classes from './LoginInput.module.scss';

const LoginInput = () => {
  const { methods, invalid, error } = useInput('login');

  return (
    <div className={classes.input__wrapper}>
      <input
        {...methods.register('login', {
          minLength: { value: 4, message: 'быть не короче 4 символов' },
          maxLength: { value: 16, message: 'быть не длинее 10 символов' },
          validate: {
            letters: (v) => /(?=.*([a-z]|[A-Z]|[0-9]))/.test(v) || 'содержать латинские буквы',
            start: (v) => /(^([a-z]|[A-Z]))/.test(v) || 'начинаться с латинской буквы',
          },
        })}
        placeholder="Логин"
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
        type="text"
      />
      {error && invalid ? <p className={classes.error}>Логин должен {error}</p> : null}
    </div>
  );
};

export default LoginInput;
