import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTES } from 'Data/constants';

import './index.scss';

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <ul>
          <li>
            <Link to={ROUTES.home}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.signIn}>sign in</Link>
          </li>
        </ul>
      </header>
      {children}
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;