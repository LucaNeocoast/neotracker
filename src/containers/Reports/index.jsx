import React from 'react';

import Sidebar from 'Components/Sidebar';
import privateRoute from 'Hocs/privateRoute';

import './index.scss';

function reports() {
  return (
    <div className="reports">
      <Sidebar />
      <div className="reports__content">
        soy los reports <span className="reports__content--wi">WIIIIIIIIIIIIIIIIIII</span>!!!!!!!!
      </div>
    </div>
  );
}

export default privateRoute(reports);
