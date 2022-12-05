import { DICTIONARY, Languages } from '../../constants/Dictionary/Dictionary';
import classes from './NotFound.module.scss';
import { useAppSelector } from '../../app/hooks';

const NotFound = () => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  return (
    <section className={`${classes.container} section`}>
      <div className={classes.description}>
        <h1 className={classes.description__heading}>{DICTIONARY.ErrorPageHeader[lang]} </h1>
        <p className={classes.description__message}>{DICTIONARY.ErrorPageDescription[lang]}</p>
      </div>
      <img src="../assets/images/ErrorPage/404.png" alt="404" />
    </section>
  );
};

export default NotFound;
