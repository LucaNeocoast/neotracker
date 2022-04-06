import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../data/constants';

export default (Component) => (
  () => {
    if (localStorage.getItem('uid')) {
      return (<Navigate to={ROUTES.timer} />);
    }

    return <Component />;
  }
);
