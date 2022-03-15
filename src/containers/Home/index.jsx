import React from 'react';
import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';

import './index.scss';

function Home() {
  return (
    <div className="home">
      <div className="sidebar">
        <ClockDark className="sidebar__clock" />
        <button type="submit" className="sidebar__button">
          Timer
        </button>
        <button type="submit" className="sidebar__button">
          Reports
        </button>
      </div>
    </div>
  );
}

export default Home;
