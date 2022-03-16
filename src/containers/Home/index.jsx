import React, { useState } from 'react';

import Reports from 'Components/Reports';
import Timer from 'Components/Timer';
import privateRoute from 'Hocs/privateRoute';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';

import './index.scss';

function Home() {
  const [show, setShow] = useState(<Reports />);
  const [timer, setTimer] = useState('sidebar__button');
  const [reports, setReports] = useState('sidebar__button active');

  const reportsHandler = () => {
    setTimer('sidebar__button');
    setReports('sidebar__button__active');
    setShow(<Reports />);
  };
  const timerHandler = () => {
    setTimer('sidebar__button__active');
    setReports('sidebar__button');
    setShow(<Timer />);
  };
  return (
    <div className="home">
      <div className="sidebar">
        <ClockDark className="sidebar__clock" />
        <button type="submit" className={timer} onClick={timerHandler}>
          Timer
        </button>
        <button type="submit" className={reports} onClick={reportsHandler}>
          Reports
        </button>
      </div>
      <div className="home__content">
        {show}
      </div>
    </div>
  );
}

export default privateRoute(Home);
