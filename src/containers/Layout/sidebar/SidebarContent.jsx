import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, sidebarCollapse,
}) => {
  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Dashboard"
          icon="home"
          route="/api_dashboard"
          onClick={hideSidebar}
        />
      </ul>
      <ul className="sidebar__block">
        <SidebarCategory title="Usage" icon="diamond" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="SERP" route="/ui/panels" onClick={hideSidebar} />
          <SidebarLink title="Keywords Data" route="/ui/buttons" onClick={hideSidebar} />
          <SidebarLink title="Business Data" route="/ui/carousel" onClick={hideSidebar} />
          <SidebarLink title="OnPage" route="/ui/collapse" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>      
      <ul className="sidebar__block">
        <SidebarCategory title="Account" icon="user" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Profile" route="/account/profile" onClick={hideSidebar} />
          <SidebarLink title="Add Funds" route="/default_pages/pricing_cards" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
