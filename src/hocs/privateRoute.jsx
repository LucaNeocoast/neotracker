import React from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../data/constants';

export default (Component) => (
  // eslint-disable-next-line func-names
  function () {
    if (!localStorage.getItem('uid')) {
      return (<Navigate to={ROUTES.signIn} />);
    }

    return <Component />;
  }
);
