export type Dictionary = {
  [key: string]: {
    ru: string;
    en: string;
  };
};

export const DICTIONARY: Dictionary = {
  Login: {
    ru: 'Вход',
    en: 'Login',
  },
  Registration: {
    ru: 'Регистрация',
    en: 'Registration',
  },
  Start: {
    ru: 'Начать',
    en: 'Start',
  },
  HowToWork: {
    ru: 'Как работать с сервисом',
    en: 'How to utilize ',
  },
  Description: {
    ru: 'Сервис, позволяющий собрать все рабочие задания команды в едином пространстве и достичь новых высот продуктивности.',
    en: 'A service that allows you to collect all the work tasks of the team in a single space and reach new heights of productivity.',
  },
  OurTeam: {
    ru: 'Наша команда',
    en: 'Our Team',
  },
};
