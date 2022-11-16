import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import classes from './PasswordInput.module.scss';

const PasswordInput = () => {
  const methods = useFormContext();
  const { formState } = methods;
  const [isVisible, setIsVisible] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [fieldError, setFieldError] = useState('');

  useEffect(() => {
    const { errors } = formState;
    const haveErrors = Object.keys(errors).includes('password');
    if (haveErrors) {
      console.log(errors);
      setFieldError(errors.password?.message as string);
      setInvalid(true);
    } else {
      setFieldError('');
      setInvalid(false);
    }
  }, [formState]);

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
        onChange={() => setInvalid(false)}
        placeholder="Пароль"
        className={`${classes.input} ${invalid ? classes.input_invalid : ''}`}
        type={isVisible ? 'text' : 'password'}
      />
      <span
        className={`${classes.toggler} ${
          isVisible ? classes.toggler_visible : classes.toggler_invisible
        }`}
        onMouseDown={() => setIsVisible(true)}
        onMouseUp={() => setIsVisible(false)}
      />
      {fieldError && invalid ? <p className={classes.error}>Пароль должен {fieldError}</p> : null}
    </div>
  );
};

export default PasswordInput;
