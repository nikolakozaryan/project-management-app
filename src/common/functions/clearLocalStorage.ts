export const clearLocalStorage = async () => {
  await localStorage.removeItem('user_id');
  await localStorage.removeItem('user_login');
  await localStorage.removeItem('user_token');
};
