import React from 'react';
import classes from './TeamCard.module.scss';

const TeamCard: React.FC<{ name: string; done: string; image: string }> = ({
  name,
  done,
  image,
}) => (
  <div className={classes.card}>
    <header className={classes.card__header}>
      <img className={classes.card__avatar} src={`../../../home/${image}`} alt={name} />
      <h3 className={classes.card__name}>{name}</h3>
    </header>
    <p className={classes.card__description}>{done}</p>
  </div>
);
export default TeamCard;
