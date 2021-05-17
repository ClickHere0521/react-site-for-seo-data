import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import HomeOutlineIcon from 'mdi-react/HomeOutlineIcon';

const SidebarLink = ({
  title, icon, newLink, route, onClick,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'home': return <HomeOutlineIcon size={18} />;
      default: return null; 
    }
  };

  return (
    <NavLink
      to={route}
      onClick={onClick}
      activeClassName="sidebar__link-active"
    >
      <li className="sidebar__link">
        {icon ? renderIcon() : ''}
        <p className="sidebar__link-title">
          {title}
          {newLink ? <Badge className="sidebar__link-badge"><span>New</span></Badge> : ''}
        </p>
      </li>
    </NavLink>
  );
};

SidebarLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarLink.defaultProps = {
  icon: '',
  newLink: false,
  route: '/',
  onClick: () => {},
};

export default SidebarLink;
