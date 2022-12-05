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
      ru: 'Пока ничего...',
      en: 'Did nothing yet...',
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
      ru: 'Пока ничего...',
      en: 'Did nothing yet...',
    },
    image: 'YG.jpg',
    link: 'https://github.com/YaGrig',
  },
];
