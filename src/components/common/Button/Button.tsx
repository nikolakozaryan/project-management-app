import React from 'react';
import classes from './Button.module.scss';
import { DICTIONARY } from '../../../constants/Dictionary';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';

const Button: React.FC<{ type: string; link: boolean; color?: string; header?: boolean }> = ({
  type,
  link,
  color,
  header,
}) => {
  const set: string = useAppSelector((state) => state.language.lang);
  const dictionarySection = DICTIONARY[type];

  return (
    <>
      {link ? (
        <Link to={`/${DICTIONARY[type].en}`}>
          <button
            className={[
              classes.container,
              color === 'blue' ? classes.blue : '',
              header ? classes.header : '',
            ].join(' ')}
          >
            {dictionarySection[set as keyof typeof dictionarySection]}
          </button>
        </Link>
      ) : (
        <button
          className={[
            classes.container,
            color === 'blue' ? classes.blue : '',
            header ? classes.header : '',
          ].join(' ')}
        >
          {dictionarySection[set as keyof typeof dictionarySection]}
        </button>
      )}
    </>
  );
};

export default Button;
