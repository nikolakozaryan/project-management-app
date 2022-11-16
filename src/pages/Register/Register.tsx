import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import LoginInput from '../../components/Register/LoginInput/LoginInput';
import NameInput from '../../components/Register/NameInput/NameInput';
import PasswordInput from '../../components/Register/PasswordInput/PasswordInput';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';

const Register = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onSubmit' });

  const formSubmitHandler: SubmitHandler<FormInputs> = (data, event) => {
    event?.preventDefault();
  };

  return (
    <section className={classes.register}>
      <h2 className={classes.register__heading}>Регистрация</h2>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(formSubmitHandler)} className={classes.register__form}>
          <NameInput />
          <LoginInput />
          <PasswordInput />
          <Button value="зарегистрироваться" />
        </form>
      </FormProvider>
    </section>
  );
};

export default Register;
