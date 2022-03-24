import React, { useState, useEffect } from 'react';

import TagsList from 'Components/TagsList';
import PropTypes from 'prop-types';

import { minutesToHours } from 'date-fns/esm';

import { ReactComponent as ArrowRigth } from 'Assets/arrow-rigth.svg';
import { ReactComponent as ArrowDown } from 'Assets/arrow-down.svg';

import './index.scss';

const Project = ({
  tags, color, name, trackedTime,
}) => {
  console.log(tags);
  const [minutes, setMinutes] = useState('');
  const [open, setOpen] = useState(false);

  const opening = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  useEffect(() => {
    setMinutes(Math.round(trackedTime - (60 * (minutesToHours(trackedTime)))));
  }, []);

  return (
    <div>
      <div className="project">
        <div className="project__container">
          <div className="project__container-box">
            {open ? (<ArrowDown onClick={opening} />) : <ArrowRigth onClick={opening} />}
            <div className="project__container-point" style={{ backgroundColor: color }} />
            <div>{name}</div>
          </div>
          <div className="project__time">{trackedTime > 0 ? `${minutesToHours(trackedTime)}:${minutes}` : '0:0'}</div>
        </div>
      </div>
      <div className="project__line" />
      {open && <TagsList tags={tags} />}
    </div>
  );
};

Project.propTypes = {
  tags: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  trackedTime: PropTypes.number.isRequired,
};

export default Project;
