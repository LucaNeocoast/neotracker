import React, { useState } from 'react';

import Reports from 'Components/Reports';
import Timer from 'Components/Timer';
import privateRoute from 'Hocs/privateRoute';

import { ReactComponent as ClockDark } from 'Assets/clockDark.svg';

import './index.scss';

function NotFound() {
  return (
    <div className="not-found">
      <h1>
        Oops <span role="img" aria-label="crying face">😭</span>
      </h1>
      <h5>
        Boilerplate made with <span role="img" aria-label="love">♥️</span> by <a href="https://www.neocoast.com" target="_blank" rel="nofollow">NeoCoast</a>
      </h5>
    </div>
  );
}

export default NotFound;
