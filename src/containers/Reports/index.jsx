import React from 'react';

import Sidebar from 'Components/Sidebar';
import privateRoute from 'Hocs/privateRoute';

import './index.scss';

const reports = () => (
  <div className="reports">
    <Sidebar />
    <div className="reports__content">
      r
    </div>
  </div>
);

export default privateRoute(reports);
