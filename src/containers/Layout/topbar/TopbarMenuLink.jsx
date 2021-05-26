import React from 'react';
import PropTypes from 'prop-types';
import MoneyIcon from 'mdi-react/MoneyIcon';
import UserTieIcon from 'mdi-react/UserTieIcon';
import LogoutIcon from 'mdi-react/LogoutIcon';
import { Link } from 'react-router-dom';

const renderIcon = (icon) => {
  switch (icon) {
    case 'user': return <UserTieIcon size={14} />;
    case 'money': return <MoneyIcon size={14} />;
    case 'exit': return <LogoutIcon size={14} />;
    default: return null;
  }
};

const TopbarMenuLinks = ({
  title, icon, path, onClick,
}) => (
  <Link className="topbar__link" to={path} onClick={onClick}>
    {renderIcon(icon)}
    <p style={{ paddingLeft: 10 }} className="topbar__link-title">{title}</p>
  </Link>
);

TopbarMenuLinks.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TopbarMenuLinks;
