import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../data/constants';

const PrivateRoute = (Component) => {
  if (!localStorage.getItem('uid')) {
    return (<Navigate to={ROUTES.signIn} />);
  }

  return <Component />;
};

export default PrivateRoute;
