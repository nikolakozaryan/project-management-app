import React, { useEffect } from 'react';
import classes from './Header.module.scss';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logo from './Logo/Logo';
import HeaderBurger from './HeaderBurger/HeaderBurger';
import MenuBurger from './HeaderBurger/MenuBurger/MenuBurger';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
    });
    return () => {
      window.addEventListener('scroll', () => {
        window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
      });
    };
  });
  return (
    <div className={[classes.container, isScrolled ? classes.scrolled : ''].join(' ')}>
      <div className={classes.header}>
        <Logo />
        <HeaderButtons />
        <HeaderBurger />
      </div>
    </div>
  );
};
export default Header;
