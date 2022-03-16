import React, { useState } from 'react';

import Reports from 'Components/Reports';
import Timer from 'Components/Timer';
import privateRoute from 'Hocs/privateRoute';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';
import { ReactComponent as Exit } from 'Assets/exit.svg';

import './index.scss';

function Home() {
  const [show, setShow] = useState(<Reports />);
  const [timer, setTimer] = useState('');
  const [reports, setReports] = useState('sidebar__active');

  const reportsHandler = () => {
    setTimer('sidebar__desactive');
    setReports('sidebar__active');
    setShow(<Reports />);
  };
  const timerHandler = () => {
    setTimer('sidebar__active');
    setReports('sidebar__desactive');
    setShow(<Timer />);
  };
  return (
    <div className="home">
      <div className="sidebar">
        <ClockDark className="sidebar__clock" />
        <button type="submit" className={`sidebar__button ${timer}`} onClick={timerHandler}>
          Timer
        </button>
        <button type="submit" className={`sidebar__button ${reports}`} onClick={reportsHandler}>
          Report
        </button>
        <div className="sidebar__empty"></div>
        <div className="sidebar__logOut">
          Log out <Exit />
        </div>
      </div>
      <div className="home__content">
        {show}
      </div>
    </div>
  );
}

export default privateRoute(Home);
