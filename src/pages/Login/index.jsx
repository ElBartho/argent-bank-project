import {
  Main,
  ContentSection,
  InputWrapper,
  RemenberWrapper,
  ValidationError,
} from './login';
import Icon from '../../components/Icon';
import { getUser } from '../../actions/user.actions';
import { getProfile } from '../../actions/profile.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';

const Login = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');
  const [canSeePassword, setCanSeePassword] = useState(false);
  const [canRememberCredentials, setCanRememberCredentials] = useState(
    localStorage.getItem('email') ? true : false
  );
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    credentials: '',
  });

  useEffect(() => {
    if (user.isLoggedIn) {
      dispatch(getProfile(user.token));
      localStorage.setItem('token', user.token);
      localStorage.setItem('tokenExpiration', Date.now() + 3600 * 4000);
    }
  }, [dispatch, navigate, user.isLoggedIn, user.token]);

  useEffect(() => {
    // const storageToken = localStorage.getItem('token');
    // const storageTokenExpiration = localStorage.getItem('tokenExpiration');
    // const tokenExpired = parseInt(storageTokenExpiration) < Date.now();

    // if (tokenExpired) {
    //   localStorage.removeItem('storageToken');
    //   localStorage.removeItem('storageTokenExpiration ');
    // }
    // if (storageToken && !tokenExpired && profile.data === null) {
    //   dispatch(getProfile(storageToken));
    // }
    if (profile.data) {
      navigate(`/profile/${profile.data.id}`);
    }
  }, [navigate, profile.data]);

  useEffect(() => {
    if (user.authenticationFailed) {
      setErrorMessage({
        ...errorMessage,
        credentials: 'Wrong email or password',
      });
    }
  }, [errorMessage, user.authenticationFailed]);

  const isEmail = (email) => {
    return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleForm = (event) => {
    event.preventDefault();
    const err = { email: '', password: '' };
    const data = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    if (data.email === '') {
      err.email = 'Please enter your email';
    } else if (isEmail(data.email)) {
      err.email = 'Please enter a valid email';
    }
    if (data.password === '') {
      err.password = 'Please enter your password';
    }
    if (err.email !== '' || err.password !== '') {
      setErrorMessage((prev) => ({
        ...prev,
        email: err.email,
        password: err.password,
      }));
      return;
    }
    canRememberCredentials
      ? (() => {
          localStorage.setItem('email', data.email);
          localStorage.setItem('password', data.password);
        })()
      : (() => {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        })();
    dispatch(getUser(data));
    setErrorMessage({ email: '', password: '', credentials: '' });
  };

  return (
    <Main>
      <ContentSection>
        <Icon title='User Icon' />
        <h1>Sign In</h1>
        <form onSubmit={(event) => handleForm(event)}>
          <ValidationError>{errorMessage.credentials}</ValidationError>
          <InputWrapper>
            <label htmlFor='email'>Username</label>
            <input type='text' id='email' defaultValue={email} />
            <ValidationError>{errorMessage.email}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='password'>Password</label>
            <input
              type={canSeePassword ? 'text' : 'password'}
              id='password'
              defaultValue={password}
            />
            <i
              className={canSeePassword ? 'far fa-eye-slash' : 'far fa-eye'}
              onClick={() => setCanSeePassword((prev) => !prev)}
              style={{
                cursor: 'pointer',
                top: '33px',
                right: '6px',
                position: 'absolute',
                opacity: '75%',
              }}
            ></i>
            <ValidationError>{errorMessage.password}</ValidationError>
          </InputWrapper>
          <RemenberWrapper>
            <input
              type='checkbox'
              id='remember-me'
              onClick={() => setCanRememberCredentials((prev) => !prev)}
              defaultChecked={canRememberCredentials}
            />
            <label htmlFor='remember-me'>Remember Me</label>
          </RemenberWrapper>
          <Button
            text='Sign In'
            type='submit'
            cursor='pointer'
            padding='8px'
            fontSize='1.1rem'
            margin='1rem 0 0 0'
            textColor='#fff'
            borderColor='#00bc77'
            backgroundColor='#00bc77'
          />
        </form>
      </ContentSection>
    </Main>
  );
};

export default Login;
