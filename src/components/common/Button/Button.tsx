import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY, Languages } from '../../../constants/Dictionary/Dictionary';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { MyProps } from './types';

const Button: React.FC<MyProps> = ({ type, link, color, header, formID, onClick }) => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  const content = DICTIONARY[type][lang];
  console.log(content, type, DICTIONARY[type]);
  const button = (
    <button
      onClick={onClick}
      form={formID}
      className={[
        classes.container,
        color === 'blue' ? classes.blue : '' || color === 'red' ? classes.red : '',
        header ? classes.header : '',
      ].join(' ')}
    >
      {content}
    </button>
  );

  return <>{link ? <Link to={`/${type}`}>{button}</Link> : button}</>;
};

export default Button;
