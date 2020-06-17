import React from 'react';
import PropTypes from 'prop-types';

// type options: bleed, content, wide

const SectionContent = ({className, children, size = 'content', id}) => {
  return (
    <section
      className={`${className ? className + ' ' : ''}section section--${size}`}
      id={id}
    >
      {children}
    </section>
  );
};

SectionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  id: PropTypes.any,
};

export default SectionContent;
