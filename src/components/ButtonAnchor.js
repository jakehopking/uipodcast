import React from 'react';
import PropTypes from 'prop-types';

const ButtonAnchor = ({
  url,
  className,
  icon = null,
  iconPosition = 'left',
  children,
}) => {
  switch (iconPosition) {
    case 'right':
      return (
        <a href={url} className={`btn ${className}`}>
          <div className="btn__text">{children}</div>
          <div className="btn__icon">{icon}</div>
        </a>
      );
    default:
      return (
        <a href={url} className={`btn ${className}`}>
          <div className="btn__icon">{icon}</div>
          <div className="btn__text">{children}</div>
        </a>
      );
  }
};

ButtonAnchor.propTypes = {};

export default ButtonAnchor;
