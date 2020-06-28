import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'gatsby';
import {FiMenu, FiX} from 'react-icons/fi';
import scrollTo from '../utils/scrollTo';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [location, setLocation] = useState('');
  // Hide menu on load if mobile
  useEffect(() => {
    setLocation(window.location.pathname);
    if (window.innerWidth < 768) {
      setShowMenu(false);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // console.log(window.innerWidth);
  // const toggleMenuTimeout = () => {
  //   setTimeout(() => toggleMenu(), 600);
  // };

  const toggleMenuActive = showMenu ? 'site-nav__toggle--active' : '';

  return (
    <Fragment>
      <nav className="site-header__nav site-nav">
        <a
          className={`site-nav__toggle ${toggleMenuActive}`}
          onClick={toggleMenu}
        >
          {showMenu ? <FiX /> : <FiMenu />}
        </a>
        {showMenu && (
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
            {location === '/' && (
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
        )}
      </nav>
    </Fragment>
  );
};

export default Nav;
