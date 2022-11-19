import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY } from '../../../constants/Dictionary';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

const Button: React.FC<{ type: string }> = ({ type }) => {
  const set: string = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY[type];

  return (
    <>
      <Link to={`/${DICTIONARY[type].en}`}>
        <button className={[classes.container, type === 'Start' ? classes.start : ''].join(' ')}>
          {dictionarySection[set as keyof typeof dictionarySection]}
        </button>
      </Link>
    </>
  );
};

export default Button;
