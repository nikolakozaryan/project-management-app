import React from 'react';
import { TEAM_MEMBERS } from '../../../constants/TeamMembers';
import GitProfile from './GitProfile/GitProfile';
import classes from './Footer.module.scss';
import { useAppSelector } from '../../../app/hooks';

const Footer = () => {
  const lang: string = useAppSelector((state) => state.language.lang);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <a
          className={classes.logo}
          href="https://rs.school/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img width="100" height="37" src="../../home/rs_logo.svg" alt="RS Logo" />
        </a>
        <div className={classes.profiles}>
          {TEAM_MEMBERS.map((item, index) => (
            <GitProfile
              name={item.name[lang as keyof typeof item.name]}
              link={item.link}
              key={index}
            />
          ))}
        </div>
        <span className={classes.date}>2022</span>
      </div>
    </div>
  );
};

export default Footer;
