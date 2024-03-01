import axios from 'axios';

export const GET_USER_APPROVED = 'GET_USER_APPROVED';
export const GET_USER_REJECTED = 'GET_USER_REJECTED';
export const REFRESH_USER_STATUS = 'REFRESH_USER_STATUS';
export const LOG_OUT = 'LOG_OUT';

export const getUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/login',
        data
      );
      console.log(response);
      dispatch({ type: GET_USER_APPROVED, payload: response.data.body.token });
    } catch (error) {
      dispatch({ type: GET_USER_REJECTED });
      console.error('Error login: ', error);
    }
  };
};

export const refreshUserStatus = () => {
  return (dispatch) => {
    dispatch({ type: REFRESH_USER_STATUS });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: LOG_OUT });
  };
};
