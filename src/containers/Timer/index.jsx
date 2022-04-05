import React from 'react';

import Sidebar from 'Components/Sidebar';
import privateRoute from 'Hocs/privateRoute';

import './index.scss';

const timer = () => (
  <div className="timer">
    <Sidebar />
    <div className="timer__content">
      soy el timer <span className="timer__content--wi">WIIIIIIIIIIIIIIIIIII</span>!!!!!!!!
    </div>
  </div>
);

export default privateRoute(timer);
