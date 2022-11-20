import React from 'react';
import { Link } from 'react-router-dom';
import { BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './MenuBurger.module.scss';

const MenuBurger: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className={[classes.menu, active ? classes.active : ''].join(' ')}>
      <div className={classes.content}>
        <ul>
          <Link to={`/${BUTTONS.login}`}>
            <li>{BUTTONS.login}</li>
          </Link>
          <Link to={`/${BUTTONS.registration}`}>
            <li>{BUTTONS.registration}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuBurger;
