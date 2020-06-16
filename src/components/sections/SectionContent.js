import React from 'react';
import PropTypes from 'prop-types';

const SectionContent = ({className, children}) => {
  return (
    <section className={`section section--content ${className}`}>
      {children}
    </section>
  );
};

SectionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default SectionContent;
