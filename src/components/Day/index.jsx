import React from 'react';

import { format } from 'date-fns';

import PropTypes from 'prop-types';
import ProjectsLists from 'Components/ProjectsLists';

import './index.scss';

const Day = ({ date, projects }) => (
  <div className="project">
    <div clssName="project__content">
      <div className="project__container">
        <div className="project__content-date">{format(new Date(date), 'dd do, MMMM yyyy')}</div>
        <div className="project__content-line" />
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
