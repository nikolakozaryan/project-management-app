export const DICTIONARY = {
  signin: {
    ru: 'Войти',
    en: 'Sign In',
  },
  home: {
    ru: 'На главную',
    en: 'Home',
  },
  delete: {
    ru: 'Удалить',
    en: 'Delete',
  },
  signup: {
    ru: 'Регистрация',
    en: 'Sign Up',
  },
  deleteColumn: {
    ru: 'колонку',
    en: 'column',
  },
  deleteBoard: {
    ru: 'доску',
    en: 'board',
  },
  deleteTask: {
    ru: 'задачу',
    en: 'task',
  },
  addBoard: {
    ru: 'Добавить',
    en: 'Add',
  },
  deleteQuestion: {
    ru: 'Вы уверены, что хотите безвозвратно удалить',
    en: 'Are sure that you want to delete',
  },
  addBoardText: {
    ru: 'Добавить доску',
    en: 'Add board',
  },
  newBoard: {
    ru: 'New Desk',
    en: 'New Desk',
  },
  boards: {
    ru: 'Доски',
    en: 'Boards',
  },
  deskName: {
    ru: 'Название доски',
    en: 'Desk Name',
  },
  deskDescription: {
    ru: 'Описание доски',
    en: 'Desk description',
  },
  editBoard: {
    ru: 'Редактировать доску',
    en: 'Edit desk',
  },
  add: {
    ru: 'ДОБАВИТЬ',
    en: 'ADD',
  },
  signup_uc: {
    ru: 'ЗАРЕГИСТРИРОВАТЬСЯ',
    en: 'SIGN UP',
  },
  signin_uc: {
    ru: 'ВОЙТИ',
    en: 'SIGN IN',
  },
  start: {
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
  cancel: {
    ru: 'Отмена',
    en: 'Cancel',
  },
  title: { ru: 'Название', en: 'Title' },
  description: { ru: 'Описание', en: 'Description' },
  description_placeholder: {
    ru: 'Описание (не более 150 символов)',
    en: 'Description (no more than 150 characters)',
  },
};

export type Languages = 'ru' | 'en';
export type DictionaryKeys = keyof typeof DICTIONARY;
