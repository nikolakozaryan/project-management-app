import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { DICTIONARY, DictionaryKeys, Languages } from '../../../../constants/Dictionary/Dictionary';
import { getBoardsList, removeBoard } from '../../../../features/dashboard/dashboardSlice';
import { IBoard } from '../../../../features/dashboard/interface';
import classes from './Desk.module.scss';
import { deleteBoard } from '../../../../features/dashboard/helpers';

const Desk: React.FC<{
  edit: React.Dispatch<React.SetStateAction<boolean>>;
  info?: IBoard;
  changeId: React.Dispatch<React.SetStateAction<string>>;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ edit, info, changeId, setDeleteModal }) => {
  const [deskName, setDeskName] = React.useState('');
  const [deskDescription, setDeskDescription] = React.useState('');
  const lang: Languages = useAppSelector((state) => state.language.lang);

  React.useEffect(() => {
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
  }, [info]);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>{deskName}</h2>

        <img
          onClick={() => {
            changeId(info?._id as string);
            edit(true);
          }}
          src="./assets/icons/deskLayout/pen.svg"
          alt="asd"
        />
      </div>
      <div className={classes.description}>
        <p>{deskDescription}</p>

        <img
          onClick={() => {
            changeId(info?._id as string);
            setDeleteModal(true);
          }}
          src="./assets/icons/deskLayout/garbage.svg"
          alt="asd"
        />
      </div>
    </div>
  );
};

export default Desk;
