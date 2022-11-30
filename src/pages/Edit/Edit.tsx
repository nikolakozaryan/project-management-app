import React, { useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useCurrentUser, useLogout } from '../../app/hooks';
import Button from '../../components/common/Button/Button';
import FormMessage from '../../components/common/FormMessage/FormMessage';
import FormInput from '../../components/common/FormInput/FormInput';
import Loader from '../../components/common/Loader/Loader';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { deleteCurrentUser, resetDeleteUserError } from '../../features/deleteUser/deleteUserSlice';
import { editCurrentUser, resetEditUserError } from '../../features/editUser/editUserSlice';
import { fetchUsers } from '../../features/users/usersSlice';
import classes from './Edit.module.scss';
import { FormInputs } from './types';

const Edit = () => {
  const logout = useLogout();
  const dispatch = useAppDispatch();
  const currentUser = useCurrentUser();
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });

  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const isLoading = useAppSelector((state) => state.editUser.loading);
  const isAuth = useAppSelector((state) => state.signin.login);

  const editErrorMessage = useAppSelector((state) => state.editUser.errorMessage);
  const deleteErrorMessage = useAppSelector((state) => state.deleteUser.errorMessage);

  useEffect(() => {
    dispatch(resetEditUserError());
    dispatch(resetDeleteUserError());
  }, [dispatch]);

  //set initial input values
  useEffect(() => {
    methods.setValue('login', currentUser?.login as string);
    methods.setValue('name', currentUser?.name as string);
  }, [currentUser?.login, currentUser?.name, methods]);

  //logout when user successfully deleted
  useEffect(() => {
    if (deleteErrorMessage === 'success') logout();
  }, [deleteErrorMessage, logout]);

  if (!isAuth) return <Navigate to="/home" />;

  const formSubmitHandler: SubmitHandler<FormInputs> = async (data, event) => {
    event?.preventDefault();
    await dispatch(editCurrentUser(data));
    await dispatch(fetchUsers());
  };

  const deleteHandler = () => {
    const userId = localStorage.getItem('user_id') as string;
    dispatch(deleteCurrentUser(userId));
  };

  const showFormMessage = (editMessage: string, deleteMessage: string) => {
    if (!editMessage && !deleteMessage) return null;
    const message = editMessage || deleteMessage;
    return message === 'success' ? (
      <FormMessage value={message} type="success" />
    ) : (
      <FormMessage value={message} type="failed" />
    );
  };

  return (
    <section className={`${classes.edit__section} section`}>
      {isLoading ? <Loader /> : null}
      <div className={classes.edit}>
        <h2 className={classes.edit__heading}>{DICTIONARY.edit_user[lang]}</h2>
        {showFormMessage(editErrorMessage, deleteErrorMessage)}
        <FormProvider {...methods}>
          <form
            id="edit-form"
            onSubmit={methods.handleSubmit(formSubmitHandler)}
            className={classes.edit__form}
          >
            <p className={classes.input__label}>
              <span>{DICTIONARY.name[lang]}</span>
              <FormInput type="name" validate={true} />
            </p>
            <p className={classes.input__label}>
              <span>{DICTIONARY.login[lang]}</span>
              <FormInput type="login" validate={true} />
            </p>
            <p className={classes.input__label}>
              <span>{DICTIONARY.password[lang]}</span>
              <FormInput type="password" validate={true} />
            </p>
          </form>
          <div className={classes.buttons}>
            <Button
              type={BUTTONS.delete_user as DictionaryKeys}
              link={false}
              color="white"
              onClick={() => deleteHandler()}
            />
            <Button
              type={BUTTONS.save_profile as DictionaryKeys}
              link={false}
              color="blue"
              formID="edit-form"
            />
          </div>
        </FormProvider>
      </div>
    </section>
  );
};

export default Edit;
