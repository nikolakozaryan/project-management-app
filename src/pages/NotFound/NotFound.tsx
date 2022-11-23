import Button from '../../components/common/Button/Button';
import { BUTTONS } from '../../constants/HeaderButtonsConstants';
import { DICTIONARY, DictionaryKeys, Languages } from '../../constants/Dictionary/Dictionary';
import classes from './NotFound.module.scss';
import { useAppSelector } from '../../app/hooks';

const NotFound = () => {
  const lang = useAppSelector((state) => state.language.lang) as Languages;
  return (
    <section className={classes.container}>
      <div>
        <h1 className={classes.header}>{DICTIONARY.ErrorPageHeader[lang]} </h1>
        <p>{DICTIONARY.ErrorPageDescription[lang]}</p>
      </div>
      <img src="../errorPage/404.svg" alt="404" />
      <Button link={true} type={BUTTONS.home as DictionaryKeys} color={'blue'}></Button>
    </section>
  );
};

export default NotFound;
