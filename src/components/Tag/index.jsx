import React, { useState } from 'react';

import EntriesLists from 'Components/EntriesLists';
import PropTypes from 'prop-types';

import { format } from 'date-fns';

import { ReactComponent as ArrowRigth } from 'Assets/arrow-rigth.svg';
import { ReactComponent as ArrowDown } from 'Assets/arrow-down.svg';

const Tag = ({
  entries, color, name,
}) => {
  const [open, setOpen] = useState(false);

  const opening = () => {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="post-home">
      <div className="content-home__name">{color} color 2</div>
      <div className="content-home__date">{name} name 2</div>
      <div>{format(new Date(entries[0].initial_date), 'hh:mm a')}</div>
      <div>{format(new Date(entries[entries.length - 1].finish_date), 'hh:mm a')}</div>
      {open ? (<><ArrowDown onClick={opening} /> <EntriesLists entries={entries} /></>) : <ArrowRigth onClick={opening} />}
    </div>
  );
};

Tag.propTypes = {
  entries: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tag;
