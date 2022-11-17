import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LS_L_KEY = 'lang';
console.log(localStorage.getItem(LS_L_KEY) ?? 'ru');
export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    lang: JSON.parse(localStorage.getItem(LS_L_KEY) as string) ?? 'ru',
  },
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      localStorage.setItem(LS_L_KEY, JSON.stringify(action.payload));
    },
  },
});

export const selectLanguage = (state: { lang: string }) => state.lang;

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
