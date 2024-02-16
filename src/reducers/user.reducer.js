import {
  GET_USER_APPROVED,
  GET_USER_REJECTED,
  LOG_OUT,
} from '../actions/user.actions';

const initialState = {
  data: null,
  isLoggedIn: false,
  authenticationFailed: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_APPROVED:
      return {
        ...state,
        data: action.payload.body,
        isLoggedIn: true,
        authenticationFailed: false,
      };
    case GET_USER_REJECTED:
      return { ...state, authenticationFailed: true };
    case LOG_OUT:
      return {
        ...state,
        data: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
