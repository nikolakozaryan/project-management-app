import React from 'react';
import { BUTTONS } from '../../../../constants/HeaderButtonsConstants';
import Button from '../../Button/Button';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import classes from './HeaderButtons.module.scss';
import { DictionaryKeys } from '../../../../constants/Dictionary/Dictionary';
import { useAppSelector } from '../../../../app/hooks';
import AuthButtons from './AuthButtons/AuthButtons';

const HeaderButtons = () => {
  const isAuth = useAppSelector((state) => state.signin.login);

  return (
    <div className={classes.container}>
      {isAuth ? (
        <AuthButtons />
      ) : (
        <>
          <Button type={BUTTONS.signin as DictionaryKeys} link={true} />
          <Button type={BUTTONS.signup as DictionaryKeys} link={true} header={true} />
        </>
      )}

      <LanguageSelect />
    </div>
  );
};

export default HeaderButtons;
