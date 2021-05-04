import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';
import classNames from 'classnames';
import { RTLProps } from '@/shared/prop-types/ReducerProps';

const SidebarCategory = ({
  title, icon, isNew, children, rtl,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const categoryClass = classNames({
    'sidebar__category-wrap': true,
    'sidebar__category-wrap--open': isCollapsed,
  });

  const toggleCategory = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={categoryClass}>
      <button className="sidebar__link sidebar__category" type="button" onClick={toggleCategory}>
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
        <p className="sidebar__link-title">{title}
          {isNew && <span className="sidebar__category-new" />}
        </p>
        <span className={`sidebar__category-icon lnr lnr-chevron-${rtl.direction === 'rtl' ? 'left' : 'right'}`} />
      </button>
      <Collapse isOpen={isCollapsed} className="sidebar__submenu-wrap">
        <ul className="sidebar__submenu">
          <div>
            {children}
          </div>
        </ul>
      </Collapse>
    </div>
  );
};

SidebarCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  rtl: RTLProps.isRequired,
  isNew: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

SidebarCategory.defaultProps = {
  icon: '',
  isNew: false,
};

export default connect(state => ({
  rtl: state.rtl,
}))(SidebarCategory);
