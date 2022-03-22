/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from 'Data/constants';
import { logOut } from 'Axios/Axios';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';
import { ReactComponent as Exit } from 'Assets/exit.svg';

import './index.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logOutHandler = () => {
    logOut().then(() => {
      localStorage.removeItem('uid');
      localStorage.removeItem('client');
      localStorage.removeItem('expiry');
      localStorage.removeItem('accessToken');
      navigate(ROUTES.signIn);
    });
  };

  const items = [
    {
      label: 'timer',
      icon: 'timerIcon',
      path: ROUTES.timer,
    },
    {
      label: 'report',
      icon: 'reportIcon',
      path: ROUTES.report,
    },
  ];
  return (
    <div className="sidebar">
      <ClockDark className="sidebar__clock" />
      {items.map((item) => (
        <button type="submit" className={item.path === location.pathname ? 'sidebar__button active' : 'sidebar__button inactive'} onClick={() => navigate(item.path)}>
          {item.label}
        </button>
      ))}
      <div className="sidebar__logOut" role="button" onClick={logOutHandler}>
        Log out <Exit />
      </div>
    </div>
  );
};

export default Sidebar;
