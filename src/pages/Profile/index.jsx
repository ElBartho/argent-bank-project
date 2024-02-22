import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { refreshUserData } from '../../actions/user.actions';
import { useEffect } from 'react';
import { getProfile } from '../../actions/profile.actions';

const Profile = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const storageToken = localStorage.getItem('token');
  const isTokenExpired = () => {
    const storageTokenExpiration = localStorage.getItem('tokenExpiration');
    if (!storageTokenExpiration) return true;
    return Date.now() > parseInt(storageTokenExpiration);
  };

  useEffect(() => {
    if (!isTokenExpired()) {
      dispatch(refreshUserData({ body: { token: storageToken } }));
      dispatch(getProfile(storageToken));
    }
  }, [dispatch, storageToken]);

  if (!user.isLoggedIn && isTokenExpired()) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    return <Navigate to='/login' />;
  }

  return <div>Profile Page</div>;
};

export default Profile;
