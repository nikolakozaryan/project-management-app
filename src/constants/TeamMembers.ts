type TeamMember = {
  name: {
    ru: string;
    en: string;
  };
  done: {
    ru: string;
    en: string;
  };
  image: string;
  link: string;
};
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: { ru: 'Козырев Николай', en: 'Nikolay Kozyrev' },
    done: {
      ru: 'Структура приложения, взаимодействие с бэк-эндом, регистрация, авторизация и редактирование пользователей, страница доски, хранилище Redux, адаптивный дизайн приложения.',
      en: 'App structure, back-end interactions, registration, authorization and editing users, board page, Redux store, adaptive app design.',
    },
    image: 'NZ.jpg',
    link: 'https://github.com/nikolakozaryan',
  },
  {
    name: {
      ru: 'Григорьев Яков',
      en: 'Yakov Grigorev',
    },
    done: {
      ru: 'Домашняя страница, страница досок, drag-and-drop, взаимодействие с бэк-эндом, модальные окна, видео-гайд.',
      en: 'Home page, dashboard page, drag-and-drop, back-end interactions, modal windows, video-guide.',
    },
    image: 'YG.jpg',
    link: 'https://github.com/YaGrig',
  },
];
