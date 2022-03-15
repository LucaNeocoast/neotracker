import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Clock } from 'Assets/clock.svg';
import signIn from 'Axios/Axios';
import './index.scss';

function SignIn() {
  const [email, setEmail] = useState('');
  const [emaillNeo, setEmaillNeo] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const signInHandler = () => {
    setEmaillNeo(`${email}@neocoast.com`);
    signIn(emaillNeo, pass).then((response) => {
      localStorage.setItem('uid', response.data.data.uid);
      setError('');
      navigate('/');
    }).catch((err) => {
      setEmail('');
      setPass('');
      setError(err.response.data.errors);
    });
  };

  return (
    <div className="sign-in">
      <div><Clock className="clock" /></div>
      <div className="sign-in__neo">NEO<span className="sign-in__tracker">TRACKER</span></div>
      <div className="sign-in__container">
        <form className="form">
          <li className="form__word">Email:</li>
          <div className="form__div" id="input_id">
            <span className="form__neocoast">@neocoast.com</span>
            <input
              className="form__input"
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <li className="form__word">Password:</li>
          <input
            className="form__input"
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </form>
        <div className="error">{error}</div>
        <button type="submit" className="form__button" onClick={signInHandler}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
