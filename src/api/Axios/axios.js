import axios from 'axios';

const api = axios.create({
  baseURL: 'http://admin-stg.neocoast.com/api/v1/',
  headers: { 'Content-Type': 'application/json' },
});

const signIn = (email, password) => api.post(
  'auth/sign_in',
  {
    email,
    password,
  }
);

export {
  // eslint-disable-next-line import/prefer-default-export
  signIn,
};
