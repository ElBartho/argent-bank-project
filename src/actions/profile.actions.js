import axios from 'axios';

export const GET_PROFILE_SUCCESSED = 'GET_PROFILE_SUCCESSED';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';

export const getProfile = (token) => {
  return async (dispatch) => {
    try {
      const headers = {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/profile',
        '',
        { headers: headers }
      );
      dispatch({ type: GET_PROFILE_SUCCESSED, payload: response.data });
      console.log(response.data);
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAILED });
      console.error('Error fetching profile: ', error);
    }
  };
};
