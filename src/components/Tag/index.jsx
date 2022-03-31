import React, { useState, useEffect } from 'react';

import EntriesLists from 'Components/EntriesLists';
import PropTypes from 'prop-types';

import { format, differenceInMinutes } from 'date-fns';

import { ReactComponent as ArrowRigth } from 'Assets/arrow-rigth.svg';
import { ReactComponent as ArrowDown } from 'Assets/arrow-down.svg';

import { minutesToHours } from 'date-fns/esm';

import './index.scss';

const Tag = ({
  entries, color, name,
}) => {
  const [open, setOpen] = useState(false);
  const [minutes, setMinutes] = useState('');
  const [diference, setDiference] = useState('');

  useEffect(() => {
    setDiference(differenceInMinutes(
      new Date(entries[entries.length - 1].finish_date),
      new Date(entries[0].initial_date)
    ));
    setMinutes(Math.round(diference - (60 * (minutesToHours(diference)))));
  }, [diference]);

  const opening = () => setOpen(!open);

  return (
    <div>
      <div className="tag">
        <div className="tag__container">
          <div className="tag__container-box">
            {open ? <ArrowDown onClick={opening} /> : <ArrowRigth onClick={opening} />}
            <div className="tag__container-point" style={{ backgroundColor: color }} />
            <div>{name}</div>
          </div>
          <div className="tag__container-times">
            <div className="tag__container-time">{format(new Date(entries[0].initial_date), 'hh:mm a')} - </div>
            <div className="tag__container-time">{format(new Date(entries[entries.length - 1].finish_date), 'hh:mm a')}</div>
            <div className="tag__container-total">{diference > 0 ? `${minutesToHours(diference)}:${minutes}` : '0:0'}</div>
          </div>
        </div>
      </div>
      <div className="tag__line" />
      {open && (
        <>
          <EntriesLists entries={entries} />
          <div className="tag__empty" />
        </>
      )}
    </div>
  );
};

Tag.propTypes = {
  entries: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tag;
