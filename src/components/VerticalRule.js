import React from 'react';
import PropTypes from 'prop-types';

const VerticalRule = ({className, height = 100}) => {
  return (
    <div
      className={`vr vr--pink mx-auto ${className}`}
      style={{height: height + 'px'}}
    ></div>
  );
};

VerticalRule.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
};

export default VerticalRule;
