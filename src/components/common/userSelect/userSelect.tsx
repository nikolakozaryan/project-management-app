import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { IUser } from '../../../features/users/interface';
import classes from './userSelect.module.scss';

const UserSelect: React.FC<{
  set: React.Dispatch<React.SetStateAction<string[]>>;
  id: string;
  users: string[];
  isBoard: boolean;
  userTasks: string[];
}> = ({ set, users, isBoard, userTasks }) => {
  const usersStore = useAppSelector((state) => state.users.users);
  const usersBoard = useAppSelector((state) => state.board.users);
  const [list, setList] = useState<IUser[]>([]);

  useEffect(() => {
    if (users) setList(usersStore.filter((item) => users.includes(item._id)));
  }, [usersBoard, users]);

  const [isListShown, setIsListShown] = React.useState(false);
  const handleClickList = () => {
    setIsListShown((prev) => !prev);
  };

  const handleClickItem = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const value = target.dataset.id as string;
    const arrayCoppy = isBoard ? [...users] : [...userTasks];
    if (isBoard) {
      if (users.includes(value)) {
        arrayCoppy.splice(+users.indexOf(value), 1);
        set(arrayCoppy);
      } else {
        set((prev) => {
          return [...prev, value];
        });
      }
    } else {
      if (userTasks.includes(value)) {
        arrayCoppy.splice(+userTasks.indexOf(value), 1);
        set(arrayCoppy);
      } else {
        set((prev) => {
          return [...prev, value];
        });
      }
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div onClick={handleClickList} className={classes.select}>
          <div className={classes.info}>
            <img src="../../../assets/icons/deskLayout/userIcon.svg" alt="userIcon" />
            <span className={classes.text}>{'users'}</span>
          </div>
          <img
            className={classes.arrow}
            style={isListShown ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0deg)' }}
            src="../../../assets/icons/deskLayout/arrow.svg"
            alt="arrow"
          />
        </div>
      </div>
      {isListShown && (
        <ul className={classes.list}>
          {isBoard
            ? usersStore.map((item) => (
                <li
                  data-id={item._id}
                  onClick={handleClickItem}
                  className={classes.item}
                  key={item._id}
                >
                  <div className={classes.checkbox}>
                    {users.length === 0 ? null : users.includes(item._id) ? (
                      <img src="../../../assets/icons/deskLayout/tick.svg" alt="arrow" />
                    ) : null}
                  </div>
                  {item.name}
                </li>
              ))
            : list.map((item) => (
                <li
                  data-id={item._id}
                  onClick={handleClickItem}
                  className={classes.item}
                  key={item._id}
                >
                  <div className={classes.checkbox}>
                    {userTasks.length === 0 ? null : userTasks.includes(item._id) ? (
                      <img src="../../../assets/icons/deskLayout/tick.svg" alt="arrow" />
                    ) : null}
                  </div>
                  {item.name}
                </li>
              ))}
        </ul>
      )}
    </>
  );
};

export default UserSelect;
