import React from 'react';
import classes from './HeaderBurger.module.scss';
import MenuBurger from './MenuBurger/MenuBurger';

const HeaderBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={[classes.burger_button, isMenuOpen ? classes.active : classes.not_active].join(
          ' '
        )}
      >
        <span />
      </div>
      <MenuBurger active={isMenuOpen} handleClick={handleClick} />
    </>
  );
};

export default HeaderBurger;
