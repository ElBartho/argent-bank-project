import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === 'GET_USER_APPROVED') {
    localStorage.setItem('token', action.payload);
    localStorage.setItem('tokenExpiration', Date.now() + 3600 * 4000);
  }

  return result;
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().prepend(localStorageMiddleware),
  devTools: true,
});
