import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY } from '../../../constants/Dictionary';
import { Link } from 'react-router-dom';

const Button: React.FC<{ type: string }> = ({ type }) => {
  return (
    <>
      <Link to={`/${DICTIONARY[type].ru}`}>
        <button className={classes.container}>{DICTIONARY[type].ru}</button>
      </Link>
    </>
  );
};

export default Button;
