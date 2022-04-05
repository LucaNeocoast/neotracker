import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';

import './index.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
        <button
          type="submit"
          className={item.path === location.pathname ? 'sidebar__button--active' : 'sidebar__button--inactive'}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
