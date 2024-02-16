import {
  Main,
  ContentSection,
  SignInButton,
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

const Login = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [isRemember, setIsRemember] = useState(
    localStorage.getItem('remember')
  );
  const [error, setError] = useState({
    email: '',
    password: '',
    credentials: '',
  });

  useEffect(() => {
    if (user.authenticationFailed) {
      setError({ ...error, credentials: 'Wrong email or password' });
    }
  }, [error, user.authenticationFailed]);

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    const storageTokenExpiration = localStorage.getItem('tokenExpiration');
    if (user.isLoggedIn) {
      dispatch(getProfile(user.data.token));
      if (isRemember) {
        localStorage.setItem('token', user.data.token);
      }
    }
  }, [dispatch, navigate, user, isRemember]);

  useEffect(() => {
    if (profile.data) {
      navigate(`/profile/${profile.data.id}`);
    }
  }, [navigate, profile]);

  const handleForm = (event) => {
    const err = { email: '', password: '' };
    const data = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    event.preventDefault();

    if (data.email === '') {
      err.email = 'Please enter your email';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      err.email = 'Please enter a valid email';
    }
    if (data.password === '') {
      err.password = 'Please enter your password';
    }
    if (err.email !== '' || err.password !== '') {
      setError({ ...error, email: err.email, password: err.password });
      return;
    }
    isRemember
      ? (() => {
          localStorage.setItem('email', data.email);
          localStorage.setItem('password', data.password);
          localStorage.setItem('user', {
            email: data.email,
            password: data.password,
          });
        })()
      : (() => {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        })();
    localStorage.setItem('remember', isRemember);
    dispatch(getUser(data));
    setError({ email: '', password: '', credentials: '' });
  };

  return (
    <Main>
      <ContentSection>
        <Icon title='User Icon' />
        <h1>Sign In</h1>
        <form onSubmit={(event) => handleForm(event)}>
          <ValidationError>{error.credentials}</ValidationError>
          <InputWrapper>
            <label htmlFor='email'>Username</label>
            <input
              type='text'
              id='email'
              defaultValue={localStorage.getItem('email')}
            ></input>
            <ValidationError>{error.email}</ValidationError>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='password'>Password</label>
            <input
              type={togglePassword ? 'text' : 'password'}
              id='password'
              defaultValue={localStorage.getItem('password')}
            ></input>
            <i
              className={togglePassword ? 'far fa-eye-slash' : 'far fa-eye'}
              onClick={() => setTogglePassword((prev) => !prev)}
              style={{
                cursor: 'pointer',
                top: '33px',
                left: '212px',
                position: 'absolute',
                opacity: '75%',
              }}
            ></i>
            <ValidationError>{error.password}</ValidationError>
          </InputWrapper>
          <RemenberWrapper>
            <input
              type='checkbox'
              id='remember-me'
              defaultChecked={localStorage.getItem('remember')}
              onChange={() => setIsRemember((prev) => !prev)}
            ></input>
            <label htmlFor='remember-me'>Remember Me</label>
          </RemenberWrapper>
          <SignInButton type='submit'>Sign In</SignInButton>
        </form>
      </ContentSection>
    </Main>
  );
};

export default Login;
