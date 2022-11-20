import React from 'react';
import classes from './HeaderBurger.module.scss';
import MenuBurger from './MenuBurger/MenuBurger';

const HeaderBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      <div
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={[classes.burger_button, isMenuOpen ? classes.active : classes.not_active].join(
          ' '
        )}
      >
        <span />
      </div>
      <MenuBurger active={isMenuOpen} />
    </>
  );
};

export default HeaderBurger;
