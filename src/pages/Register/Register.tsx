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
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';

const Register = () => {
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });
  const errorMessage = useAppSelector((state) => state.signup.message);
  const dispatch = useAppDispatch();
  const lang = useAppSelector((state) => state.language.lang) as Languages;

  const formSubmitHandler: SubmitHandler<FormInputs> = (data, event) => {
    event?.preventDefault();
    dispatch(send(data));
  };

  return (
    <section className={`${classes.register__section} section`}>
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
