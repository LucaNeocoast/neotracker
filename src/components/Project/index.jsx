import React, { useState, useEffect } from 'react';

import TagsList from 'Components/TagsList';
import PropTypes from 'prop-types';

import { minutesToHours } from 'date-fns/esm';

import { ReactComponent as ArrowRigth } from 'Assets/arrow-rigth.svg';
import { ReactComponent as ArrowDown } from 'Assets/arrow-down.svg';


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
    <div className="post-home">
      <div className="content-home__name">{tags.tracked_time}</div>
      <div className="content-home__date">{`${minutesToHours(trackedTime)}:${minutes}`}</div>

      {open ? (<><ArrowDown onClick={opening} /> <TagsList tags={tags} /></>) : <ArrowRigth onClick={opening} />}
      <div>{color}</div>
      <div>{name}</div>
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
