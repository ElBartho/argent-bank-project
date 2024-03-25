import {
  GET_PROFILE_SUCCESSED,
  GET_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESSED,
  UPDATE_PROFILE_FAILED,
} from '../actions/profile.actions';

import { LOG_OUT } from '../actions/user.actions';

const initialState = {
  data: null,
  fetchingProfileFailed: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESSED:
      return {
        ...state,
        data: action.payload.body,
        fetchingProfileFailed: false,
      };
    case LOG_OUT:
      return { ...state, data: null };
    case GET_PROFILE_FAILED:
      return { ...state, fetchingProfileFailed: false };
    case UPDATE_PROFILE_SUCCESSED:
      return {
        ...state,
        data: action.payload.body,
        fetchingProfileFailed: false,
      };
    case UPDATE_PROFILE_FAILED:
      return { ...state, fetchingProfileFailed: true };
    default:
      return state;
  }
};

export default profileReducer;
