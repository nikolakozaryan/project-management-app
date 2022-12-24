import React, { useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
  useAuth,
  useCurrentUser,
  useLogout,
} from '../../app/hooks';
import Button from '../../components/common/Button/Button';
import FormMessage from '../../components/common/FormMessage/FormMessage';
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
import WrappedInput from '../../components/common/WrappedInput/WrappedInput';
import { INPUT_TYPES } from '../../constants/InputTypes';

const Edit = () => {
  const isAuth = useAuth();
  const logout = useLogout();
  const dispatch = useAppDispatch();
  const currentUser = useCurrentUser();
  const methods = useForm<FormInputs>({ reValidateMode: 'onChange' });

  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const isLoading = useAppSelector((state) => state.editUser.loading);

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

    const response = await dispatch(editCurrentUser(data));
    const { requestStatus } = response.meta;

    if (requestStatus === 'fulfilled') dispatch(fetchUsers());
  };

  const showFormMessage = (editMessage: string, deleteMessage: string) => {
    if (!editMessage && !deleteMessage) return null;
    const message = editMessage || deleteMessage;
    const messageType = message === 'success' ? 'success' : 'failed';
    return <FormMessage value={message} type={messageType} />;
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
            {INPUT_TYPES.map((type) => (
              <WrappedInput key={type} type={type} />
            ))}
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
