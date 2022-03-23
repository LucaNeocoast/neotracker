/* eslint-disable camelcase */
import React from 'react';
import Day from 'Components/Day';
import PropTypes from 'prop-types';

const DaysLists = ({ days }) => {
  console.log(days);
  return (
    <>
      {
        days.map(({
          date, projects, tracked_time,
        }) => (
          <Day
            date={date}
            projects={projects}
            trackedTime={tracked_time}
          />
        ))
      }
    </>
  );
};

DaysLists.propTypes = {
  days: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      projects: PropTypes.array.isRequired,
      trackedTime: PropTypes.number.isRequired,
    })
  ),
};
DaysLists.defaultProps = {
  days: [],
};

export default DaysLists;
