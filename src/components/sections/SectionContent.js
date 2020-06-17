import React from 'react';
import PropTypes from 'prop-types';

// type options: bleed, content, wide

const SectionContent = ({className, children, type = 'content', id = null}) => {
  return (
    <section className={`section section--${type} ${className}`} id={id}>
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
