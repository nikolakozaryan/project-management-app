import React, { useEffect } from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { FormInputs } from './types';
import classes from './Register.module.scss';
import Button from '../../components/common/Button/Button';
import { useAppDispatch, useAppSelector, useAuth } from '../../app/hooks';
import FormMessage from '../../components/common/FormMessage/FormMessage';
import { Link, Navigate } from 'react-router-dom';
import FormInput from '../../components/common/FormInput/FormInput';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import Loader from '../../components/common/Loader/Loader';
import { resetError, signin, signup } from '../../features/authentification/authentificationSlice';

const Register = () => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const dispatch = useAppDispatch();

  const errorMessage = useAppSelector((state) => state.authentification.message);
  const isLoading = useAppSelector((state) => state.authentification.loading);
  const isAuth = useAuth();

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  const formSubmitHandler: SubmitHandler<FormInputs> = async (data, event) => {
    event?.preventDefault();
    const response = await dispatch(signup(data));
    const { requestStatus, arg } = response.meta;

    if (requestStatus === 'fulfilled') {
      const { login, password } = arg;
      dispatch(signin({ login, password }));
    }
  };

  return (
    <section className={`${classes.register__section} section`}>
      {isLoading ? <Loader /> : null}
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
