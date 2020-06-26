import React from 'react';
import {Link} from 'gatsby';

const EpisodeItem = ({props: {...node}}) => {
  const {frontmatter, excerpt, fields} = node;
  return (
    <Link to={frontmatter.path || fields.slug} className="episode-list__item">
      <div className="episode-list__meta">
        <div className="episode-list__number">
          {frontmatter.category === 'episode'
            ? `Episode ${frontmatter.episodeNo}`
            : `${frontmatter.author}`}
        </div>
        <div className="episode-list__date">
          <em>{frontmatter.date}</em>
        </div>
        <div className="episode-list__format tag">{frontmatter.format}</div>
      </div>
      <div className="episode-list__info">
        <div className="episode-list__title h4 mb2">{frontmatter.title}</div>
        <div className="episode-list__excerpt font-weight-light">
          <em>{excerpt.replace('Show notes ', '')}</em>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeItem;
