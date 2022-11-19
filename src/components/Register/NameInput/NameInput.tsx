import React from 'react';
import { useInput } from '../../../hooks/useInput';
import classes from './NameInput.module.scss';

const NameInput = () => {
  const { methods, invalid, error } = useInput('name');

  return (
    <div className={classes.input__wrapper}>
      <input
        {...methods.register('name', {
          minLength: { value: 4, message: 'быть не короче 4 символов' },
          maxLength: { value: 20, message: 'быть не длинее 20 символов' },
          validate: {
            letters: (v) => /^[A-ZА-Я]/.test(v) || 'начинаться с большой буквы',
            start: (v) => /^.[a-zа-я]+$/.test(v) || 'содержать только буквы',
          },
        })}
        placeholder="Имя"
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
        type="text"
      />
      {error && invalid ? <p className={classes.error}>Имя должно {error}</p> : null}
    </div>
  );
};

export default NameInput;
