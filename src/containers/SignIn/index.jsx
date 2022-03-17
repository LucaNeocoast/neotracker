import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Clock } from 'Assets/clock.svg';

import { ROUTES } from 'Data/constants';
import publicRoute from 'Hocs/publicRoute';
import { signIn } from 'Axios/Axios';

import './index.scss';

function SignIn() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signInHandler = () => {
    signIn(`${email}@neocoast.com`, pass).then((response) => {
      localStorage.setItem('uid', response.data.data.uid);
      setError('');
      navigate(ROUTES.report);
    }).catch((err) => {
      setEmail('');
      setPass('');
      setError(err.response.data.errors);
    });
  };

  return (
    <div className="sign-in">
      <div><Clock className="sign-in__clock" /></div>
      <div className="sign-in__neo">NEO<span className="sign-in__tracker">TRACKER</span></div>
      <div className="sign-in__container">
        <form className="sign-in__form">
          <li className="sign-in__form-word">Email:</li>
          <div className="sign-in__form-div" id="input_id">
            <span className="sign-in__form-neocoast">@neocoast.com</span>
            <input
              className="sign-in__form-input"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <li className="sign-in__form-word">Password:</li>
          <input
            className="sign-in__form-input"
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </form>
        <div className="sign-in__error">{error}</div>
        <button type="submit" className="sign-in__form-button" onClick={signInHandler}>Sign In</button>
      </div>
    </div>
  );
}

export default publicRoute(SignIn);
