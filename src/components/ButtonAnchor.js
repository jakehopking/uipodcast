import React from 'react';
import PropTypes from 'prop-types';

const ButtonAnchor = ({
  tag = 'a',
  href,
  to,
  className,
  icon = null,
  iconPosition = 'left',
  children,
}) => {
  const Tag = tag;
  switch (iconPosition) {
    case 'right':
      return (
        <Tag to={to} href={href} className={`btn ${className}`}>
          <div className="btn__text">{children}</div>
          <div className="btn__icon">{icon}</div>
        </Tag>
      );
    default:
      return (
        <Tag to={to} href={href} className={`btn ${className}`}>
          <div className="btn__icon">{icon}</div>
          <div className="btn__text">{children}</div>
        </Tag>
      );
  }
};

ButtonAnchor.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  children: PropTypes.array,
};

export default ButtonAnchor;
