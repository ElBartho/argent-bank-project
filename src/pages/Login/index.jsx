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
    localStorage.getItem('email') ? true : false
  );
  const [error, setError] = useState({
    email: '',
    password: '',
    credentials: '',
  });

  useEffect(() => {
    if (user.isLoggedIn) {
      dispatch(getProfile(user.data.token));
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('tokenExpiration', Date.now() + 3600 * 4000);
    }
  }, [dispatch, navigate, user.isLoggedIn, user.data]);

  useEffect(() => {
    const storageToken = localStorage.getItem('token');
    const storageTokenExpiration = localStorage.getItem('tokenExpiration');
    const tokenExpired = parseInt(storageTokenExpiration) < Date.now();
    console.log('deuxieme useEffect');
    console.log('Profile Data => ', profile.data);

    if (tokenExpired) {
      localStorage.removeItem('storageToken');
      localStorage.removeItem('storageTokenExpiration ');
    }
    if (storageToken && !tokenExpired && profile.data === null) {
      console.log('deuxieme useEffect premier if');
      dispatch(getProfile(storageToken));
    }
    if (profile.data && storageToken) {
      navigate(`/profile/${profile.data.id}`);
    }
  }, [dispatch, navigate, profile.data]);

  // useEffect(() => {
  //   if (user.data) {
  //     const token = user?.data.token;
  //     dispatch(getProfile(token));
  //   }
  //   if (user.data && profile.data) {
  //     navigate(`/profile/${profile.data.id}`);
  //     form.current.reset();
  //   }
  // }, [dispatch, navigate, profile.data, user.data, user.profile]);

  useEffect(() => {
    if (user.authenticationFailed) {
      setError({ ...error, credentials: 'Wrong email or password' });
    }
  }, [error, user.authenticationFailed]);

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
              onClick={() => setIsRemember((prev) => !prev)}
              defaultChecked={isRemember}
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
