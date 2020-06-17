import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const SectionTitleWings = ({
  tag = 'div',
  id = null,
  img = false,
  colour = null,
  className = null,
  children,
}) => {
  const Tag = `${tag}`;

  return (
    <Fragment>
      {!img ? (
        <section className="section section--title" id={id}>
          <Tag className="section-title wings">{children}</Tag>
        </section>
      ) : (
        <section
          className={`section section--title wings wings--${colour} ${className}`}
          id={id}
        >
          <img src={img} alt="Line break image" />
        </section>
      )}
    </Fragment>
  );
};

SectionTitleWings.propTypes = {
  tag: PropTypes.string,
  id: PropTypes.string,
  img: PropTypes.string,
  colour: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default SectionTitleWings;
