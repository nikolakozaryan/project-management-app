import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useLogout } from '../../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../../constants/Dictionary/Dictionary';
import classes from './AuthButtons.module.scss';

const AuthButtons = () => {
  const userId = useAppSelector((state) => state.authentification._id);
  const users = useAppSelector((state) => state.users.users);
  const userName = users.find((user) => user._id === userId)?.name;
  const logout = useLogout();
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Link to="/dashboard" className={`${classes.button} ${classes.button_new}`}>
        {DICTIONARY.my_boards[lang]}
      </Link>
      <button
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={`${classes.button} ${classes.button_user} ${
          isActive && classes.button_user_active
        }`}
      >
        <span className={`${classes.person} ${isActive && classes.person_active}`} />
        <span className={classes.name}>{userName}</span>
        <span className={`${classes.arrow} ${isActive && classes.arrow_active}`} />
        <div className={`${classes.user__options} ${isActive && classes.user__options_active}`}>
          <Link className={classes.user__option} to="/edit">
            <span className={classes.edit} />
            <span>{DICTIONARY.edit[lang]}</span>
          </Link>
          <Link className={classes.user__option} onClick={logout} to="/home">
            <span className={classes.signout} />
            <span>{DICTIONARY.signout[lang]}</span>
          </Link>
        </div>
      </button>
    </>
  );
};

export default AuthButtons;
