import React, { useState, useEffect } from 'react';

import Sidebar from 'Components/Sidebar';
import privateRoute from 'Hocs/privateRoute';
import { entries } from 'Axios/axios';
import DaysLists from 'Components/DaysLists';

import './index.scss';

const Timer = () => {
  const [history, setHistory] = useState('');
  const [isFetchingHistory, setIsFetchingHistory] = useState(true);

  useEffect(() => {
    entries().then((response) => {
      setHistory(response.data.historical_entries);
      setIsFetchingHistory(false);
    });
  }, []);

  return (
    <div className="timer">
      <Sidebar />
      <div className="timer__container">
        <div className="timer__container-content">
          <div className="timer__container-rectangle"></div>
          <div className="timer__container-history">TRACKING HISTORY</div>
          {!isFetchingHistory ? <DaysLists days={history} /> : <div />}
        </div>
      </div>
    </div>
  );
};
export default privateRoute(Timer);
