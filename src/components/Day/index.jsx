import React from 'react';

import { format } from 'date-fns';

import PropTypes from 'prop-types';
import ProjectsLists from 'Components/ProjectsLists';

import './index.scss';

const Day = ({ date, projects }) => (
  <div className="day">
    <div clssName="day__content">
      <div className="day__container">
        <div className="day__content-date">{format(new Date(date), 'eee do, MMMM yyyy')}</div>
        <div className="day__content-line" />
      </div>
    </div>
    <ProjectsLists projects={projects} />
  </div>
);

Day.propTypes = {
  date: PropTypes.string.isRequired,
  projects: PropTypes.object.isRequired,
};

export default Day;
