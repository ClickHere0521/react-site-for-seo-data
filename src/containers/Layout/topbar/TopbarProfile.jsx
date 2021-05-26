import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import { UserProps, AuthOProps } from '@/shared/prop-types/ReducerProps';
import { hookAuth0 } from '@/shared/components/auth/withAuth0';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/userDefault.png`;

const TopbarProfile = ({ auth0, user }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = () => {
    localStorage.removeItem('easydev');
  };

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={toggleProfile}>
        <img
          className="topbar__avatar-img"
          src={(auth0.user && auth0.user.picture) || (user && user.avatar) || Ava}
          alt="avatar"
        />
        <p className="topbar__avatar-name">
          { auth0.loading ? 'Loading...' : (auth0.user && auth0.user.name) || (user && user.fullName)}
        </p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          className="topbar__back"
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink
            title="My Profile"
            icon="user"
            path="/account/profile"
            onClick={toggleProfile}
          />
          {/* <TopbarMenuLink
            title="Calendar"
            icon="calendar-full"
            path="/default_pages/calendar"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Tasks"
            icon="list"
            path="/todo"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Inbox"
            icon="inbox"
            path="/mail"
            onClick={toggleProfile}
          />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/account/profile"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Lock Screen"
            icon="lock"
            path="/lock_screen"
            onClick={toggleProfile}
          />
          {auth0.isAuthenticated && (
            <TopbarMenuLink
              title="Log Out Auth0"
              icon="exit"
              path="/log_in"
              onClick={auth0.logout}
            />
          )} */}
          <TopbarMenuLink
            title="Add Funds"
            icon="money"
            path="/default_pages/pricing_cards"
            onClick={toggleProfile}
          />
          <TopbarMenuLink
            title="Log Out"
            icon="exit"
            path="/log_in"
            onClick={logout}
          />
        </div>
      </Collapse>
    </div>
  );
};

TopbarProfile.propTypes = {
  user: UserProps,
  auth0: AuthOProps.isRequired,
};

TopbarProfile.defaultProps = {
  user: {},
};

export default hookAuth0(TopbarProfile);
