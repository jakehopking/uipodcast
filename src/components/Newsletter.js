import React, {useEffect} from 'react';
import SectionContent from '../components/sections/SectionContent';
import PropTypes from 'prop-types';

const Newsletter = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://jake-hopking.ck.page/b9c3a9ee1a/index.js';
    script.async = true;
    script.uid = 'b9c3a9ee1a';
    const selector = document.querySelector('.newsletter__form');
    selector.appendChild(script);

    return () => {
      // selector.removeChild(script);
    };
  }, []);

  function convertKit() {
    return {
      __html: `
    <script
      async
      data-uid="b9c3a9ee1a"
      src="https://jake-hopking.ck.page/b9c3a9ee1a/index.js"
    ></script>
    `,
    };
  }

  return (
    <SectionContent id="newsletter" size="bleed" className="newsletter">
      <div className="newsletter__title">
        <h2 className="section-title section-title--dark-bg px3 py2">
          Newsletter
        </h2>
      </div>
      <div className="newsletter__subtitle">
        <h4 className="padded-multiline title-background title-background--white mx-auto text-center">
          <span>
            Access behind the scenes moments, extra
            <br />
            interview nuggets, tips and resources.
          </span>
        </h4>
      </div>
      <div
        className="newsletter__form"
        dangerouslySetInnerHTML={convertKit()}
      ></div>
    </SectionContent>
  );
};

Newsletter.propTypes = {
  props: PropTypes.any,
};

export default Newsletter;
