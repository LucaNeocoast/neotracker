/* eslint-disable import/prefer-default-export */
import axios from 'axios';

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

export {
  signIn,
};
