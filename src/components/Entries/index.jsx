import React, { useState, useEffect } from 'react';

import { format, differenceInMinutes } from 'date-fns';
import { minutesToHours } from 'date-fns/esm';

import PropTypes from 'prop-types';

import './index.scss';

const Entries = ({ description, finishDate, initialDate }) => {
  const [minutes, setMinutes] = useState('');
  const [diference, setDiference] = useState('');

  useEffect(() => {
    setDiference(differenceInMinutes(new Date(finishDate), new Date(initialDate)));
    setMinutes(Math.round(diference - (60 * (minutesToHours(diference)))));
  }, [diference]);
  return (

    <div className="entries">
      <div className="entries__name">{description}</div>
      <div className="entries__container">
        <div className="entries__container-time">{format(new Date(initialDate), 'hh:mm a')} - </div>
        <div className="entries__container-time">{format(new Date(finishDate), 'hh:mm a')}</div>
        <div className="entries__container-total">{diference > 0 ? `${minutesToHours(diference)}:${minutes}` : '0:0'}</div>
      </div>
    </div>
  );
};
Entries.propTypes = {
  description: PropTypes.string.isRequired,
  finishDate: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
};

export default Entries;
