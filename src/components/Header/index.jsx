import Logo from '../../assets/img/argentBankLogo.png';
import {
  NavWrapper,
  HomeLogo,
  StyledNavLink,
  LinkWrapper,
  IconLinkWrapper,
} from './header';
import Icon from '../Icon';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/user.actions';
import { useEffect } from 'react';
import { getProfile } from '../../actions/profile.actions';
import { refreshUserStatus } from '../../actions/user.actions';

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const isTokenExpired = () => {
      if (!user.tokenExpiration) return true;
      return Date.now() > parseInt(user.tokenExpiration);
    };

    if (!isTokenExpired()) {
      dispatch(refreshUserStatus());
      dispatch(getProfile(user.token));
    }
  }, [dispatch, user.token, user.tokenExpiration]);

  const cleanBeforeLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    dispatch(logOut());
  };

  return (
    <NavWrapper>
      <Link to='/'>
        <HomeLogo src={Logo} alt='Argent Bank Logo' />
      </Link>
      <LinkWrapper>
        {user.isLoggedIn && profile.data && (
          <IconLinkWrapper>
            <Icon title='User Icon' />
            <StyledNavLink to={`/profile/${profile.data.id}`}>
              {profile.data && profile.data.firstName}
            </StyledNavLink>
          </IconLinkWrapper>
        )}
        {user.isLoggedIn ? (
          <IconLinkWrapper>
            <Icon title='Sign Out Icon' />
            <StyledNavLink to='/' onClick={() => cleanBeforeLogOut()}>
              Sign out
            </StyledNavLink>
          </IconLinkWrapper>
        ) : (
          <IconLinkWrapper>
            <Icon title='User Icon' />
            <StyledNavLink to='/login'>Sign In</StyledNavLink>
          </IconLinkWrapper>
        )}
      </LinkWrapper>
    </NavWrapper>
  );
};

export default Header;
