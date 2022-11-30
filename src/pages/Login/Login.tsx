import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/common/Button/Button';
import FormMessage from '../../components/common/FormMessage/FormMessage';
import FormInput from '../../components/common/FormInput/FormInput';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { FormInputs } from './types';
import classes from './Login.module.scss';
import { resetSigninError, sendSigninData } from '../../features/signin/signinSlice';
import Loader from '../../components/common/Loader/Loader';
import { fetchUsers } from '../../features/users/usersSlice';

const Login = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const errorMessage = useAppSelector((state) => state.signin.message);
  const isLoading = useAppSelector((state) => state.signin.loading);
  const isAuth = useAppSelector((state) => state.signin.login);
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSigninError());
  }, [dispatch]);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  const formSubmitHandler: SubmitHandler<FormInputs> = async (data, event) => {
    event?.preventDefault();
    await dispatch(sendSigninData(data));
    await dispatch(fetchUsers());
  };

  return (
    <section className={`${classes.login__section} section`}>
      {isLoading ? <Loader /> : null}
      <div className={classes.login}>
        <h2 className={classes.login__heading}>{DICTIONARY.signin[lang]}</h2>
        {errorMessage ? <FormMessage value={errorMessage} type="failed" /> : null}
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(formSubmitHandler)} className={classes.login__form}>
            <FormInput type="login" validate={false} />
            <FormInput type="password" validate={false} />
            <Button type={BUTTONS.signin_uc as DictionaryKeys} link={false} color={'blue'} />
          </form>
        </FormProvider>
      </div>
      <p className={classes.signup}>
        {DICTIONARY.not_have_account[lang]}{' '}
        <Link className={classes.link} to="/signup">
          {DICTIONARY.signup[lang]}
        </Link>
      </p>
    </section>
  );
};

export default Login;
