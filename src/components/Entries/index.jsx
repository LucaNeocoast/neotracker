import React from 'react';

import { format } from 'date-fns';

import PropTypes from 'prop-types';

const Entries = ({ description, finishDate, initialDate }) => (
  <div className="project">
    <div className="project__date">{format(new Date(initialDate), 'hh:mm a')}</div>
    <div className="project__date">{format(new Date(finishDate), 'hh:mm a')}</div>
    <div className="project__line">{description}</div>
  </div>
);

Entries.propTypes = {
  description: PropTypes.string.isRequired,
  finishDate: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
};

export default Entries;
