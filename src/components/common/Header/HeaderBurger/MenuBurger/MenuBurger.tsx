import React from 'react';
import { Link } from 'react-router-dom';
import { HEADER_BUTTONS } from '../../../../../constants/HeaderButtonsConstants';
import classes from './MenuBurger.module.scss';

const MenuBurger: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className={[classes.menu, active ? classes.active : ''].join(' ')}>
      <div className={classes.content}>
        <ul>
          <Link to={`/${HEADER_BUTTONS.login}`}>
            <li>{HEADER_BUTTONS.login}</li>
          </Link>
          <Link to={`/${HEADER_BUTTONS.registration}`}>
            <li>{HEADER_BUTTONS.registration}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MenuBurger;
