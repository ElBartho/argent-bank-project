import Logo from '../../assets/img/argentBankLogo.png';
import {
  NavWrapper,
  HomeLogo,
  StyledNavLink,
  LinkWrapper,
  IconLinkWrapper,
} from './header';
import Icon from '../Icon';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../actions/user.actions';

const Header = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <NavLink to='/'>
        <HomeLogo src={Logo} alt='Argent Bank Logo' />
      </NavLink>
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
            <StyledNavLink to='/' onClick={() => dispatch(logOut())}>
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
