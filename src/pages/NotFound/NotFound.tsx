import Button from '../../components/common/Button/Button';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { DictionaryKeys } from '../../constants/Dictionary/Dictionary';
import classes from './NotFound.module.scss';
const NotFound = () => {
  return (
    <section className={classes.container}>
      <div>
        <h1 className={classes.header}>Страница не найдена...</h1>
        <p>Видимо, где-то вы повернули не туда. Не волнуйтесь, такое случается с каждым.</p>
      </div>
      <img src="../errorPage/404.svg" alt="404" />
      <Button link={true} type={BUTTONS.main as DictionaryKeys} color={'blue'}></Button>
    </section>
  );
};

export default NotFound;
