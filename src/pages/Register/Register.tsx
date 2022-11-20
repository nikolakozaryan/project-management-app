import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { send } from '../../features/signup/signupSlice';
import FormError from '../../components/common/FormError/FormError';
import { Link } from 'react-router-dom';
import FormInput from '../../components/common/FormInput/FormInput';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';

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
            <FormInput type="name" validate={true} />
            <FormInput type="login" validate={true} />
            <FormInput type="password" validate={true} />
            <Button type={BUTTONS.SignupAction} link={true} color={'blue'} />
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
