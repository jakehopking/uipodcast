import React from 'react';
import PropTypes from 'prop-types';

const SectionTitleWings = ({tag = 'div', id = null, children}) => {
  const Tag = `${tag}`;

  return (
    <section className="section section--title" id={id}>
      <Tag className="section-title wings">{children}</Tag>
    </section>
  );
};

SectionTitleWings.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default SectionTitleWings;
