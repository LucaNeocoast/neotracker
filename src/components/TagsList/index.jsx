import React from 'react';
import Tag from 'Components/Tag';
import PropTypes from 'prop-types';

const TagsList = ({ tags }) => (
  <div>
    {
      tags.map(({
        tag, entries,
      }) => (
        <Tag
          color={tag.color}
          name={tag.name}
          entries={entries}
        />
      ))
    }
  </div>
);

TagsList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.object.isRequired,
      entries: PropTypes.object.isRequired,
    })
  ),
};

TagsList.defaultProps = {
  tags: [],
};

export default TagsList;
