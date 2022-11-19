const validation = {
  login: {
    minLength: { value: 4, message: 'быть не короче 4 символов' },
    maxLength: { value: 16, message: 'быть не длинее 16 символов' },
    validate: {
      letters: (v: string) => /(?=.*([a-z]|[A-Z]|[0-9]))/.test(v) || 'содержать латинские буквы',
      start: (v: string) => /(^([a-z]|[A-Z]))/.test(v) || 'начинаться с латинской буквы',
    },
  },
  name: {
    minLength: { value: 4, message: 'быть не короче 4 символов' },
    maxLength: { value: 20, message: 'быть не длинее 20 символов' },
    validate: {
      letters: (v: string) => /^[A-ZА-Я]/.test(v) || 'начинаться с большой буквы',
      start: (v: string) => /^.[a-zа-я]+$/.test(v) || 'содержать только буквы',
    },
  },
  password: {
    minLength: { value: 6, message: 'быть не короче 6 символов' },
    maxLength: { value: 15, message: 'быть не длинее 15 символов' },
    validate: {
      numbers: (v: string) => /(?=.*[0-9])/.test(v) || 'содержать цифры',
      letters: (v: string) => /(?=.*([a-z]|[A-Z]))/.test(v) || 'содержать латинские буквы',
      uppercase: (v: string) => /(?=.*[A-Z])/.test(v) || 'содержать большие буквы',
      lowercase: (v: string) => /(?=.*[a-z])/.test(v) || 'содержать маленькие буквы',
    },
  },
};

export default validation;
