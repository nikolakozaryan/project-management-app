export const DICTIONARY = {
  signin: {
    ru: 'Войти',
    en: 'Sign In',
  },
  home: {
    ru: 'На главную',
    en: 'Home',
  },
  signup: {
    ru: 'Регистрация',
    en: 'Sign Up',
  },
  signup_uc: {
    ru: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    en: 'SIGN UP',
  },
  signin_uc: {
    ru: 'ВОЙТИ',
    en: 'SIGN IN',
  },
  Start: {
    ru: 'НАЧАТЬ',
    en: 'START',
  },
  HowToWork: {
    ru: 'Как работать с сервисом',
    en: 'How to use',
  },
  ErrorPageHeader: {
    ru: 'Страница не найдена...',
    en: 'Page is not found',
  },
  ErrorPageDescription: {
    ru: 'Видимо, где-то вы повернули не туда. Не волнуйтесь, такое случается с каждым.',
    en: "It seems like you took a wrong turn. Don't worry, this happens to everyone. ",
  },
  Description: {
    ru: 'Сервис, позволяющий собрать все рабочие задания команды в едином пространстве и достичь новых высот продуктивности.',
    en: 'A service that allows you to collect all the work tasks of the team in a single space and reach new heights of productivity.',
  },
  OurTeam: {
    ru: 'Наша команда',
    en: 'Our Team',
  },
  show_password: {
    ru: 'Показать пароль',
    en: 'Show password',
  },
  have_account: {
    ru: 'Уже есть аккаунт?',
    en: 'Already have an account?',
  },
  not_have_account: {
    ru: 'Ещё нет аккаунта?',
    en: "Still don't have an account?",
  },
  registration: {
    ru: 'Регистрация',
    en: 'Create account',
  },
  login: {
    ru: 'Логин',
    en: 'Login',
  },
  name: {
    ru: 'Имя',
    en: 'Name',
  },
  password: {
    ru: 'Пароль',
    en: 'Password',
  },
  edit_user: {
    ru: 'Редактировать профиль',
    en: 'Edit profile',
  },
  delete_user: {
    ru: 'УДАЛИТЬ АККАУНТ',
    en: 'DELETE PROFILE',
  },
  save_profile: {
    ru: 'СОХРАНИТЬ',
    en: 'SAVE',
  },
};

export type Languages = 'ru' | 'en';
export type DictionaryKeys = keyof typeof DICTIONARY;
