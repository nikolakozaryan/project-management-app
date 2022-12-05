import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { Languages, DICTIONARY } from '../../../../constants/Dictionary/Dictionary';
import classes from './VisibilityToggler.module.scss';
import { MyProps } from './types';

const VisibilityToggler: FC<MyProps> = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useAppSelector((state) => state.language.lang) as Languages;

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggle(!isOpen);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    toggle(false);
  };

  return (
    <span
      className={`${classes.toggler} ${
        isOpen ? classes.toggler_visible : classes.toggler_invisible
      }`}
      title={DICTIONARY.show_password[lang]}
      onMouseDown={handleClick}
      onMouseUp={handleClick}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default VisibilityToggler;
