import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={collapseProfile}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">Roman Johanson</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          className="topbar__back"
          type="button"
          aria-label="collapse profile button"
          onClick={collapseProfile}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink
            title="My Profile"
            icon="user"
            path="/account/profile"
            onClick={collapseProfile}
          />
          <TopbarMenuLink
            title="Calendar"
            icon="calendar-full"
            path="/default_pages/calendar"
            onClick={collapseProfile}
          />
          <TopbarMenuLink
            title="Tasks"
            icon="list"
            path="/todo"
            onClick={collapseProfile}
          />
          <TopbarMenuLink
            title="Inbox"
            icon="inbox"
            path="/mail"
            onClick={collapseProfile}
          />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/account/profile"
            onClick={collapseProfile}
          />
          <TopbarMenuLink
            title="Lock Screen"
            icon="lock"
            path="/lock_screen"
            onClick={collapseProfile}
          />
          <TopbarMenuLink
            title="Log Out"
            icon="exit"
            path="/log_in"
            onClick={collapseProfile}
          />
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
