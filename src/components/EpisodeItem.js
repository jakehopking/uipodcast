import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

const EpisodeItem = ({props: {...node}}) => {
  const {frontmatter, excerpt} = node;
  return (
    <Link to={frontmatter.path} className="episode-list__item">
      <div className="episode-list__meta">
        <div className="episode-list__number">
          Episode {frontmatter.episodeNo}
        </div>
        <div className="episode-list__date">
          <em>{frontmatter.date}</em>
        </div>
        <div className="episode-list__format tag">{frontmatter.format}</div>
      </div>
      <div className="episode-list__info">
        <div className="episode-list__title h4 mb2">{frontmatter.title}</div>
        <div className="episode-list__excerpt font-weight-light">
          <em>{excerpt}</em>
        </div>
      </div>
    </Link>
  );
};

EpisodeItem.propTypes = {};

export default EpisodeItem;
