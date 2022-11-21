import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { MyProps } from './types';

const Button: React.FC<MyProps> = ({ type, link, color, header }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const content = DICTIONARY[type][lang];

  const button = (
    <button
      className={[
        classes.container,
        color === 'blue' ? classes.blue : '',
        header ? classes.header : '',
      ].join(' ')}
    >
      {content}
    </button>
  );

  return <>{link ? <Link to={`/${type}`}>{button}</Link> : button}</>;
};

export default Button;
