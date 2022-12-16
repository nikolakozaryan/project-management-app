import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAuth, useLogout } from '../../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../../constants/Dictionary/Dictionary';
import { BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './MenuBurger.module.scss';
import { MyProps } from './types';

const MenuBurger: React.FC<MyProps> = ({ active, handleClick }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const isAuth = useAuth();
  const logout = useLogout();

  const options = isAuth ? (
    <>
      <li>
        <Link onClick={handleClick} to={`/${BUTTONS.edit}`}>
          {DICTIONARY.edit_profile[lang]}
        </Link>
      </li>
      <li>
        <Link
          onClick={() => {
            handleClick();
            logout();
          }}
          to="/home"
        >
          {DICTIONARY.signout[lang]}
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link onClick={handleClick} to={`/${BUTTONS.signin}`}>
          {DICTIONARY.signin[lang]}
        </Link>
      </li>
      <li>
        <Link onClick={handleClick} to={`/${BUTTONS.signup}`}>
          {DICTIONARY.signup[lang]}
        </Link>
      </li>
    </>
  );

  return (
    <div className={[classes.menu, active ? classes.active : ''].join(' ')}>
      <nav>
        <ul>{options}</ul>
      </nav>
    </div>
  );
};

export default MenuBurger;
