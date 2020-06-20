import React from 'react';
import PropTypes from 'prop-types';

const TextColumns = ({columns = 'two', className, children}) => {
  return (
    <article
      className={`text-columns text-columns--${columns} ${
        className ? className : ''
      }`}
    >
      {children}
    </article>
  );
};

TextColumns.propTypes = {
  cols: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
};

export default TextColumns;
