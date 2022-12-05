import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector, useCurrentUser, useLogout } from '../../app/hooks';
import Button from '../../components/common/Button/Button';
import FormMessage from '../../components/common/FormMessage/FormMessage';
import FormInput from '../../components/common/FormInput/FormInput';
import Loader from '../../components/common/Loader/Loader';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { resetDeleteUserError } from '../../features/deleteUser/deleteUserSlice';
import { editCurrentUser, resetEditUserError } from '../../features/editUser/editUserSlice';
import { fetchUsers } from '../../features/users/usersSlice';
import classes from './Edit.module.scss';
import { FormInputs } from './types';
import ModalDelete from '../../components/common/modalDelete/modalDelete';
import { MODAL_DELETE_TYPES } from '../../constants/Modal';

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
  const userId = localStorage.getItem('user_id') as string;
  const [showModal, setShowModal] = useState(false);

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
      {showModal ? (
        <ModalDelete id={userId} setModal={setShowModal} type={MODAL_DELETE_TYPES.deleteUser} />
      ) : null}
      <div className={classes.edit}>
        <h2 className={classes.edit__heading}>{DICTIONARY.edit_user[lang]}</h2>
        {showFormMessage(editErrorMessage, deleteErrorMessage)}
        <FormProvider {...methods}>
          <form
            id="edit-form"
            onSubmit={methods.handleSubmit(formSubmitHandler)}
            className={classes.edit__form}
          >
            <div className={classes.input__label}>
              <span>{DICTIONARY.name[lang]}</span>
              <FormInput type="name" validate={true} />
            </div>
            <div className={classes.input__label}>
              <span>{DICTIONARY.login[lang]}</span>
              <FormInput type="login" validate={true} />
            </div>
            <div className={classes.input__label}>
              <span>{DICTIONARY.password[lang]}</span>
              <FormInput type="password" validate={true} />
            </div>
          </form>
          <div className={classes.buttons}>
            <Button
              type={BUTTONS.delete_user as DictionaryKeys}
              link={false}
              color="white"
              onClick={() => setShowModal(true)}
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
