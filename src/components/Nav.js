import React, {useState, Fragment} from 'react';
import scrollTo from '../utils/ScrollTo';
import {Link} from 'gatsby';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      <nav className="site-header__nav site-nav">
        <a className="site-nav__toggle" onClick={toggleMenu}>
          Show menu
        </a>
        {showMenu && (
          <div className="site-nav__menu">
            <Link
              to={`/episodes/`}
              className="site-nav__link"
              activeClassName="site-nav__link--active"
            >
              Show notes
            </Link>
            <a onClick={() => scrollTo('#about')}>About</a>
            <a onClick={() => scrollTo('#connect')}>Connect</a>
            <a onClick={() => scrollTo('#newsletter')}>Newsletter</a>
            {/* <Link to={`/about/`} className="site-nav__link" activeClassName="site-nav__link--active">
              About
            </Link> */}
          </div>
        )}
      </nav>
    </Fragment>
  );
};

export default Nav;
