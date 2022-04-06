import axios from 'axios';
import getUserData from '../helpers';

const api = axios.create({
  baseURL: `${process.env.API_URL}api/v1/auth/`,
  headers: { 'Content-Type': 'application/json' },
});

const signIn = (email, password) => api.post(
  'sign_in',
  {
    email,
    password,
  }
).then((response) => {
  localStorage.setItem('uid', response.data.data.uid);
  localStorage.setItem('accessToken', response.headers['access-token']);
  localStorage.setItem('expiry', response.headers.expiry);
  localStorage.setItem('client', response.headers.client);
});

const logOut = () => {
  const {
    Uid,
    client,
    accessToken,
    expiry,
  } = getUserData();
  localStorage.removeItem('uid');
  localStorage.removeItem('client');
  localStorage.removeItem('expiry');
  localStorage.removeItem('accessToken');

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

  return api.get(
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
  );
};

export {
  signIn,
  logOut,
  entries,
};
