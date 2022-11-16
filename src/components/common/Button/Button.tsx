import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY } from '../../../constants/Dictionary';
import { Link } from 'react-router-dom';

const Button: React.FC<{ type: string }> = ({ type }) => {
  console.log(DICTIONARY[type], DICTIONARY, type);
  return (
    <>
      <Link to={`/${DICTIONARY[type].ru}`}>
        <button>{DICTIONARY[type].ru}</button>
      </Link>
    </>
  );
};

export default Button;
