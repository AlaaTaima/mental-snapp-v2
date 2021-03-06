import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/homeIcon.svg';
import { ReactComponent as Calendar } from '../assets/icons/calendar.svg';
import { ReactComponent as AddNew } from '../assets/icons/addNew.svg';
import { ReactComponent as FeedsFilter } from '../assets/icons/feedsFilter.svg';
import { ReactComponent as Settings } from '../assets/icons/settings.svg';
import * as ROUTES from '../../constants/routes';
import './navigation.css';

const NavBar = () => {
  return (
    <footer aria-label="page footer">
      <div className="navbar">
        <nav className="navbar__container">
          <i className="navbar__icon">
            <NavLink
              to={ROUTES.HOME}
              activeClassName="clicked"
              aria-label="go to home page"
            >
              <HomeIcon className="icons" />
            </NavLink>
          </i>
          <i className="navbar__icon">
            <NavLink
              to={ROUTES.HEAT_MAP}
              activeClassName="clicked"
              aria-label="go to heat-map page"
            >
              <Calendar className="icons" />
            </NavLink>
          </i>
          <i className="navbar__icon">
            <NavLink
              to={ROUTES.QUESTION}
              activeClassName="clicked"
              aria-label="go to questions page"
            >
              <AddNew className="icons navbar__icon-addnew" />
            </NavLink>
          </i>
          <i className="navbar__icon">
            <NavLink
              to={ROUTES.FEED}
              activeClassName="clicked"
              aria-label="go to feed page"
            >
              <FeedsFilter className="icons" />
            </NavLink>
          </i>
          <i className="navbar__icon">
            <NavLink
              to={ROUTES.ACCOUNT_SETTINGS}
              activeClassName="clicked"
              aria-label="go to your account settings page"
            >
              <Settings className="icons" />
            </NavLink>
          </i>
        </nav>
      </div>
    </footer>
  );
};

export default NavBar;
