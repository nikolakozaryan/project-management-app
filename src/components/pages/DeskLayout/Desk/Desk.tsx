import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, Languages } from '../../../../constants/Dictionary/Dictionary';
import classes from './Desk.module.scss';
import { MyProps } from './types';

const Desk: React.FC<MyProps> = ({ edit, info, changeId, setDeleteModal }) => {
  const [deskName, setDeskName] = useState('');
  const [deskDescription, setDeskDescription] = useState('');
  const lang: Languages = useAppSelector((state) => state.language.lang);

  useEffect(() => {
    if (info) {
      const nameAndDescription: { name: string; description: string } = JSON.parse(info.title);
      const name = nameAndDescription.name;
      const description = nameAndDescription.description;
      setDeskName(name);
      setDeskDescription(description);
    } else {
      setDeskName(DICTIONARY.deskName[lang as Languages]);
      setDeskDescription(DICTIONARY.deskDescription[lang as Languages]);
    }
  }, [info, lang]);

  return (
    <div className={classes.card}>
      <div className={classes.card__content}>
        <h2 className={classes.card__content__heading}>{deskName}</h2>
        <p className={classes.card__content__description}>{deskDescription}</p>
      </div>
      <img
        className={classes.card__icon_edit}
        onClick={() => {
          changeId(info?._id as string);
          edit(true);
        }}
        src="./assets/icons/deskLayout/pen.svg"
        alt="edit icon"
      />
      <img
        className={classes.card__icon_delete}
        onClick={() => {
          changeId(info?._id as string);
          setDeleteModal(true);
        }}
        src="./assets/icons/deskLayout/garbage.svg"
        alt="delete icon"
      />
    </div>
  );
};

export default Desk;
