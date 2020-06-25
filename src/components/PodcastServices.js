import React from 'react';
// import PropTypes from 'prop-types';
import {
  Applepodcasts,
  Googlepodcasts,
  Overcast,
  Pocketcasts,
  Stitcher,
  Spotify,
  Rss,
} from '@icons-pack/react-simple-icons';
import ButtonAnchor from './ButtonAnchor';

const PodcastServices = (props) => {
  const data = [
    {
      title: 'Apple Podcasts',
      url: 'https://apple.com/',
      icon: Applepodcasts,
    },
    {
      title: 'Google Podcasts',
      url: 'https://google.com/',
      icon: Googlepodcasts,
    },
    {
      title: 'Overcast',
      url: 'https://overcast.com/',
      icon: Overcast,
    },
    {
      title: 'Pocketcasts',
      url: 'https://pocketcasts.com/',
      icon: Pocketcasts,
    },
    {
      title: 'Stitcher',
      url: 'https://www.stitcher.com/podcast/ui-therapy',
      icon: Stitcher,
    },
    {
      title: 'Spotify',
      url:
        'https://open.spotify.com/show/30sbfREuT49WwBakEZAFyO?si=TLt8710YRpa8B70JTbUUKQ',
      icon: Spotify,
    },
    {
      title: 'RSS',
      url: 'https://feeds.buzzsprout.com/1180283.rss',
      icon: Rss,
    },
  ];

  return (
    <div className="podcast-services">
      {data.map(({title, url, icon: Icon}, index) => (
        <ButtonAnchor
          key={index}
          className="btn--podcast"
          href={url}
          icon={<Icon />}
        >
          {title}
        </ButtonAnchor>
      ))}
    </div>
  );
};

// PodcastServices.propTypes = {};

export default PodcastServices;
