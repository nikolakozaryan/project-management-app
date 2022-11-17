import React from 'react';
import { TEAM_MEMBERS } from '../../../constants/TeamMembers';
import GitProfile from './GitProfile/GitProfile';
import classes from './Footer.module.scss';
import { useAppSelector } from '../../../app/hooks';

const Footer = () => {
  const set: string = useAppSelector((state) => state.language.lang);
  return (
    <div className={classes.container}>
      <img src="" alt="RS Logo" />
      {TEAM_MEMBERS.map((item, index) => (
        <GitProfile name={item.name[set as keyof typeof item.name]} key={index} />
      ))}
    </div>
  );
};

export default Footer;
