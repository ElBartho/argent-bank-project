import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { updateProfile } from '../../actions/profile.actions';
import {
  Main,
  HeaderSection,
  EditFormWrapper,
  DuoContainer,
  ValidationError,
} from './profile';
import Account from '../../components/Account';
import Button from '../../components/Button';
import { InputWrapper } from '../Login/login';

const Profile = () => {
  const user = useSelector((state) => state.userReducer);
  const profile = useSelector((state) => state.profileReducer);
  const dispatch = useDispatch();
  const [canEditProfile, setCanEditProfile] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    firstNameError: '',
    lastNameError: '',
  });
  const isTokenExpired = () => {
    const storageTokenExpiration = localStorage.getItem('tokenExpiration');
    if (!storageTokenExpiration) return true;
    return Date.now() > parseInt(storageTokenExpiration);
  };
  const accounts = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ];

  if (!user.isLoggedIn && isTokenExpired()) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    return <Navigate to='/login' />;
  }

  const isNameValid = (name) => {
    return /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/.test(name);
  };

  const checkFieldValidity = (field, text, err) => {
    if (text === '') {
      return {
        ...err,
        [`${field}Error`]: `You need to enter a ${field.replace('N', ' n')}`,
      };
    } else if (!isNameValid(text)) {
      return {
        ...err,
        [`${field}Error`]: `You need to enter a valid ${field.replace('N', ' n')}`,
      };
    }
    return err;
  };

  const editFormHandle = (event) => {
    event.preventDefault();
    const data = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
    };
    let err = { firstNameError: '', lastNameError: '' };

    err = checkFieldValidity('firstName', data.firstName, err);
    err = checkFieldValidity('lastName', data.lastName, err);

    if (err.firstNameError !== '' || err.lastNameError !== '') {
      setErrorMessage((prev) => ({
        ...prev,
        firstNameError: err.firstNameError,
        lastNameError: err.lastNameError,
      }));
      return;
    }
    dispatch(updateProfile(user.token, data));
    setCanEditProfile((prev) => !prev);
  };

  return (
    <Main>
      {profile.data && (
        <>
          {canEditProfile ? (
            <EditFormWrapper>
              <h1>Welcome back</h1>
              <form onSubmit={(event) => editFormHandle(event)}>
                <DuoContainer>
                  <InputWrapper>
                    <input type='text' defaultValue={profile.data.firstName} />
                    <ValidationError>
                      {errorMessage.firstNameError}
                    </ValidationError>
                  </InputWrapper>
                  <InputWrapper>
                    <input type='text' defaultValue={profile.data.lastName} />
                    <ValidationError>
                      {errorMessage.lastNameError}
                    </ValidationError>
                  </InputWrapper>
                </DuoContainer>
                <DuoContainer>
                  <Button
                    text='Save'
                    type='submit'
                    cursor='pointer'
                    padding='8px 40px'
                    fontSize='1.1rem'
                    textColor='#fff'
                    borderColor='#00bc77'
                    backgroundColor='#00bc77'
                  />
                  <Button
                    text='Cancel'
                    onClick={() => setCanEditProfile((prev) => !prev)}
                    cursor='pointer'
                    padding='8px 32px'
                    fontSize='1.1rem'
                    textColor='#fff'
                    borderColor='#00bc77'
                    backgroundColor='#00bc77'
                  />
                </DuoContainer>
              </form>
            </EditFormWrapper>
          ) : (
            <HeaderSection>
              <h1>
                Welcome back
                <br />
                {profile.data.firstName} {profile.data.lastName}!
              </h1>
              <Button
                text='Edit Name'
                padding='10px'
                onClick={() => setCanEditProfile((prev) => !prev)}
                textColor='#fff'
                borderColor='#00bc77'
                backgroundColor='#00bc77'
              />
            </HeaderSection>
          )}
          {accounts.map((account, index) => (
            <Account
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
              link={`/profile/${profile.data.id}/account/${account.title.split('(x')[1].split(')')[0]}/transactions`}
              data={account}
            />
          ))}
        </>
      )}
    </Main>
  );
};

export default Profile;
