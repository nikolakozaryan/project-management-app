import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { sendSignupData } from '../../features/signup/signupSlice';
import { sendSigninData } from '../../features/signin/signinSlice';
import FormError from '../../components/common/FormError/FormError';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/common/FormInput/FormInput';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import Loader from '../../components/common/Loader/Loader';

const Register = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const errorMessage = useAppSelector((state) => state.signup.message);
  const isLoading = useAppSelector((state) => state.signup.loading);
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const isAuth = useAppSelector((state) => state.signin.login);
  const dispatch = useAppDispatch();
  const [submitAmount, setSubmitAmount] = useState(0);

  useEffect(() => {
    const { login, password } = methods.getValues();
    if (!errorMessage && !isLoading && submitAmount > 0) {
      dispatch(sendSigninData({ login, password }));
      setSubmitAmount(0);
    }
  }, [errorMessage, isLoading, submitAmount]);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  const formSubmitHandler: SubmitHandler<FormInputs> = async (data, event) => {
    event?.preventDefault();
    await dispatch(sendSignupData(data));
    setSubmitAmount(submitAmount + 1);
  };

  return (
    <section className={`${classes.register__section} section`}>
      {isLoading ? <Loader /> : null}
      <div className={classes.register}>
        <h2 className={classes.register__heading}>{DICTIONARY.registration[lang]}</h2>
        {errorMessage ? <FormError value={errorMessage} /> : null}
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(formSubmitHandler)}
            className={classes.register__form}
          >
            <FormInput type="name" validate={true} />
            <FormInput type="login" validate={true} />
            <FormInput type="password" validate={true} />
            <Button type={BUTTONS.signup_uc as DictionaryKeys} link={false} color={'blue'} />
          </form>
        </FormProvider>
      </div>
      <p className={classes.signin}>
        {DICTIONARY.have_account[lang]}{' '}
        <Link className={classes.link} to="/signin">
          {DICTIONARY.signin[lang]}
        </Link>
      </p>
    </section>
  );
};

export default Register;
