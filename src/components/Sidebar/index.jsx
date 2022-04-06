/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from 'Data/constants';
import { logOut } from 'Axios/axios';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';
import { ReactComponent as Timer } from 'Assets/timer.svg';
import { ReactComponent as Report } from 'Assets/report.svg';
import { ReactComponent as Exit } from 'Assets/exit.svg';
import { logOut } from 'Axios/axios';

import './index.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const logOutHandler = () => {
    logOut().then(() => {
      navigate(ROUTES.signIn);
    });
  };

  const clear = () => {
    localStorage.clear();
  };

  const items = [
    {
      label: 'Timer',
      icon: <Timer className={ROUTES.timer === location.pathname ? 'open' : 'close'} />,
      path: ROUTES.timer,
    },
    {
      label: 'Report',
      icon: <Report className={ROUTES.report === location.pathname ? 'open' : 'close'} />,
      path: ROUTES.report,
    },
  ];

  return (
    <div className="sidebar">
      <ClockDark className="sidebar__clock" onClick={clear} />
      <div className="sidebar__container">
        {
          items.map((item) => (
            <button
              type="submit"
              className={item.path === location.pathname ? 'sidebar__button active' : 'sidebar__button inactive'}
              onClick={() => navigate(item.path)}
            >
              {item.label}
              {item.icon}
            </button>
          ))
        }
      </div>
      <button className="sidebar__logOut" type="submit" onClick={logOutHandler}>
        Log out <Exit className="sidebar__logOut-exit" />
      </button>
    </div>
  );
};

export default Sidebar;
