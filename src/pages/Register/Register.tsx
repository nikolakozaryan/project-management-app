import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { resetSignupError, sendSignupData } from '../../features/signup/signupSlice';
import { sendSigninData } from '../../features/signin/signinSlice';
import FormMessage from '../../components/common/FormMessage/FormMessage';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/common/FormInput/FormInput';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import Loader from '../../components/common/Loader/Loader';

const Register = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const errorMessage = useAppSelector((state) => state.signup.message);
  const isRegisterLoading = useAppSelector((state) => state.signup.loading);
  const isLoginLoading = useAppSelector((state) => state.signin.loading);
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const isAuth = useAppSelector((state) => state.signin.login);
  const dispatch = useAppDispatch();
  const [submitAmount, setSubmitAmount] = useState(0);

  useEffect(() => {
    dispatch(resetSignupError());
  }, [dispatch]);

  useEffect(() => {
    const { login, password } = methods.getValues();
    if (!errorMessage && !isRegisterLoading && submitAmount > 0) {
      dispatch(sendSigninData({ login, password }));
      setSubmitAmount(0);
    }
  }, [errorMessage, isRegisterLoading, submitAmount]);

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
      {isRegisterLoading || isLoginLoading ? <Loader /> : null}
      <div className={classes.register}>
        <h2 className={classes.register__heading}>{DICTIONARY.registration[lang]}</h2>
        {errorMessage ? <FormMessage value={errorMessage} type="failed" /> : null}
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
