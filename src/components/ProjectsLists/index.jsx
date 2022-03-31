/* eslint-disable camelcase */
import React from 'react';
import Project from 'Components/Project';
import PropTypes from 'prop-types';

const ProjectsLists = ({ projects }) => (
  <div>
    {
      projects.map(({
        tags,
        project,
        tracked_time,
      }) => (
        <Project
          tags={tags}
          name={project.name}
          color={project.color}
          trackedTime={tracked_time}
        />
      ))
    }
  </div>
);

ProjectsLists.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.object.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      trackedTime: PropTypes.number.isRequired,
    })
  ),
};

ProjectsLists.defaultProps = {
  projects: [],
};

export default ProjectsLists;
