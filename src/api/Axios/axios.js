/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import getUserData from '../helpers';

const api = axios.create({
  baseURL: `${process.env.API_URL}api/v1/`,
  headers: { 'Content-Type': 'application/json' },
});

const signIn = (email, password) => api.post(
  'auth/sign_in',
  {
    email,
    password,
  }
);

const logOut = () => {
  const {
    Uid,
    client,
    accessToken,
    expiry,
  } = getUserData();
  return api.delete(
    'auth/sign_out',
    {
      headers: {
        'access-token': accessToken,
        'token-type': 'Bearer',
        client,
        expiry,
        Uid,
      },
    }
  );
};

const entries = () => {
  const {
    Uid,
    client,
    accessToken,
    expiry,
  } = getUserData();
  return (api.get(
    'entries_data',
    {
      headers: {
        'access-token': accessToken,
        'token-type': 'Bearer',
        client,
        expiry,
        Uid,
      },
      params: {
        timezone: 'America/Montevideo',
      },
    }
  )
  );
};

export {
  signIn,
  logOut,
  entries,
};
