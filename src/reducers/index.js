import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.reducer';
import profileReducer from './profile.reducer';

export default combineReducers({
  userReducer,
  profileReducer,
});
