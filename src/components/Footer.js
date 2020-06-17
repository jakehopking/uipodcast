import React from 'react';
import imgLineBreak from '../images/rule-section-x.svg';
import SvgStag from '../images/stag-logo-white-antlers.inline.svg';
import SectionTitleWings from '../components/sections/SectionTitleWings';
import scrollTo from '../utils/scrollTo';

const Footer = (props) => {
  return (
    <footer className="site-footer" id="footer">
      <SvgStag
        className="site-footer__logo"
        src="images/stag-logo-white-antlers.svg"
        alt="Stag logo"
        title="Jake Hopking's Hart logo"
      />
      <SectionTitleWings colour="white" img={imgLineBreak} />
      <p className="site-footer__copy small font-sans">
        Copyright &copy; 2020 <span title="Mountain Cat">Yamaneko</span> Limited
      </p>
      <p className="site-footer__owari">
        <a
          onClick={() => scrollTo('#top')}
          title="'Owari' - Japanese for 'The End'"
        >
          &#8673; 終わり &#8673;
        </a>
      </p>
    </footer>
  );
};

export default Footer;
