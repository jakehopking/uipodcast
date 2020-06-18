import React, {useState, useEffect, Fragment} from 'react';
import {Link} from 'gatsby';
import {FiMenu, FiX} from 'react-icons/fi';
import scrollTo from '../utils/scrollTo';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true);

  // Hide menu on load if mobile
  useEffect(() => {
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
  const menuIconStyle = {
    fontSize: '26px',
  };

  const toggleMenuActive = showMenu ? 'site-nav__toggle--active' : '';

  return (
    <Fragment>
      <nav className="site-header__nav site-nav">
        <a
          className={`site-nav__toggle ${toggleMenuActive}`}
          onClick={toggleMenu}
        >
          {showMenu ? (
            <FiX style={menuIconStyle} />
          ) : (
            <FiMenu style={menuIconStyle} />
          )}
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
            {window.location.pathname === '/' && (
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
