import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import LoginInput from '../../components/Register/LoginInput/LoginInput';
import NameInput from '../../components/Register/NameInput/NameInput';
import PasswordInput from '../../components/Register/PasswordInput/PasswordInput';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { send } from '../../features/signup/signupSlice';
import FormError from '../../components/common/FormError/FormError';
import { Link } from 'react-router-dom';

const Register = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const errorMessage = useAppSelector((state) => state.signup.message);
  const dispatch = useAppDispatch();

  const formSubmitHandler: SubmitHandler<FormInputs> = (data, event) => {
    event?.preventDefault();
    dispatch(send(data));
  };

  return (
    <section className={classes.register__section}>
      <div className={classes.register}>
        <h2 className={classes.register__heading}>Регистрация</h2>
        {errorMessage ? <FormError value={errorMessage} /> : null}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(formSubmitHandler)}
            className={classes.register__form}
          >
            <NameInput />
            <LoginInput />
            <PasswordInput />
            <Button value="зарегистрироваться" />
          </form>
        </FormProvider>
      </div>
      <p className={classes.signin}>
        Уже есть аккаунт?{' '}
        <Link className={classes.link} to="/signin">
          Войти
        </Link>
      </p>
    </section>
  );
};

export default Register;
