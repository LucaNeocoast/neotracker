import axios from 'axios';

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
);

const logOut = () => {
  const client = localStorage.getItem('client');
  const Uid = localStorage.getItem('uid');
  const accessToken = localStorage.getItem('accessToken');
  const expiry = localStorage.getItem('expiry');
  return api.delete(
    'sign_out',
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

export {
  signIn,
  logOut,
};
