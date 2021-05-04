import React from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import { SidebarProps } from '@/shared/prop-types/ReducerProps';
import SidebarContent from './SidebarContent';

const Sidebar = ({
  changeToDark, changeToLight, changeMobileSidebarVisibility, sidebar,
}) => {
  const sidebarClass = classNames({
    'sidebar sidebar--no-desktop': true,
    'sidebar--show': sidebar.show,
  });

  return (
    <div className={sidebarClass}>
      <button
        className="sidebar__back"
        type="button"
        aria-label="change mobile visibility button"
        onClick={changeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent
            onClick={changeMobileSidebarVisibility}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: SidebarProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
};

export default Sidebar;
