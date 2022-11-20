import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './MenuBurger.module.scss';

const MenuBurger: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className={[classes.menu, active ? classes.active : ''].join(' ')}>
      <div className={classes.content}>
        <ul>
          <Link to={`/${BUTTONS.signin}`}>
            <li>{BUTTONS.signin}</li>
          </Link>
          <Link to={`/${BUTTONS.signup}`}>
            <li>{BUTTONS.signup}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuBurger;
