type TeamMember = {
  name: {
    ru: string;
    en: string;
  };
  done: {
    ru: string;
    en: string;
  };
  link: string;
};
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: {
      ru: 'Григорьев Яша',
      en: 'Yakov Grigorev',
    },
    done: {
      ru: 'Пока ничего...',
      en: 'Did nothing yet...',
    },
    link: 'https://github.com/YaGrig',
  },
  {
    name: { ru: 'Козарян Николай', en: 'Nikolay Kozaryan' },
    done: {
      ru: 'Пока ничего...',
      en: 'Did nothing yet...',
    },
    link: 'https://github.com/nikolakozaryan',
  },
  {
    name: { ru: 'Козарян Николай', en: 'Nikolay Kozaryan' },
    done: {
      ru: 'Пока ничего...',
      en: 'Did nothing yet...',
    },
    link: 'https://github.com/nikolakozaryan',
  },
];
