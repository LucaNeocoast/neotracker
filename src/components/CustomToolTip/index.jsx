import React from 'react';

import PropTypes from 'prop-types';

import './index.scss';
const CustomTooltip = ({ active, payload }) => {
  if (payload) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <div> {payload.map(({
            // eslint-disable-next-line no-shadow
            payload,
          }) => (
            payload.complet_name
          ))}
          </div>
          <div> Hours: {payload[0].value} </div>
        </div>
      );
    }
    return null;
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
};

export default CustomTooltip;
