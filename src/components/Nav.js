import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'gatsby';
import {globalHistory as history} from '@reach/router';
import {FiMenu, FiX} from 'react-icons/fi';
import scrollTo from '../utils/scrollTo';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {location} = history;

  // Hide menu on load if mobile
  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowMenu(true);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMenuActive = showMenu ? 'site-nav__toggle--active' : '';

  return (
    <Fragment>
      <nav
        className={`site-header__nav site-nav ${
          showMenu ? 'site-nav--active' : ''
        }`}
      >
        <a
          className={`site-nav__toggle ${toggleMenuActive}`}
          onClick={toggleMenu}
        >
          {showMenu ? <FiX /> : <FiMenu />}
        </a>

        <div className="site-nav__menu">
          <Link
            to={`/`}
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            Home
          </Link>
          <Link
            to={`/episodes/`}
            partiallyActive={true}
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            Episodes
          </Link>
          <Link
            to={`/journal/`}
            partiallyActive={true}
            className="site-nav__link"
            activeClassName="site-nav__link--active"
          >
            Journal
          </Link>
          {location.pathname === '/' && (
            <Fragment>
              <a
                className="site-nav__link"
                onClick={() => scrollTo('#about', 'start')}
              >
                About
              </a>
              <a
                className="site-nav__link"
                onClick={() => scrollTo('#connect', 'start')}
              >
                Connect
              </a>
              <a
                className="site-nav__link"
                onClick={() => scrollTo('#newsletter', 'start')}
              >
                Newsletter
              </a>
            </Fragment>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
