import {
  GET_USER_APPROVED,
  GET_USER_REJECTED,
  LOG_OUT,
  REFRESH_USER_STATUS,
} from '../actions/user.actions';

const initialState = {
  token: localStorage.getItem('token'),
  tokenExpiration: localStorage.getItem('tokenExpiration'),
  isLoggedIn: false,
  authenticationFailed: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_APPROVED:
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
        authenticationFailed: false,
      };
    case GET_USER_REJECTED:
      return { ...state, authenticationFailed: true };
    case REFRESH_USER_STATUS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOG_OUT:
      return {
        ...state,
        token: null,
        tokenExpiration: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
