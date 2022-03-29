/* eslint-disable camelcase */
import React from 'react';
import Entries from 'Components/Entries';
import PropTypes from 'prop-types';

const EntriesLists = ({ entries }) => (
  <div>
    {
      entries.map(({
        description, finish_date, id, initial_date,
      }) => (
        <Entries
          description={description}
          finishDate={finish_date}
          initialDate={initial_date}
          id={id}
        />
      ))
    }
  </div>
);

EntriesLists.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      finishDate: PropTypes.string.isRequired,
      initialDate: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
EntriesLists.defaultProps = {
  entries: [],
};

export default EntriesLists;
