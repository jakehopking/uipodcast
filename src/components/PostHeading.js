import React from 'react';
import PropTypes from 'prop-types';

const PostHeading = ({tag, accent = 'blue', className, children, id}) => {
  const Tag = `${tag}`;
  return (
    <Tag
      className={`post-heading post-heading--accent-${accent} ${
        className ? className : ''
      }`}
      id={id}
    >
      {children}
    </Tag>
  );
};

PostHeading.propTypes = {
  tag: PropTypes.string.isRequired,
  accent: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default PostHeading;
