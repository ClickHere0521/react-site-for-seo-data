import React, { useState } from 'react';
import MoneyIcon from 'mdi-react/MoneyIcon';

const TopbarAddFunds = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNotification = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__collapse">
      <button className="topbar__btn topbar__btn--new" type="button" onClick={toggleNotification}>
        <MoneyIcon />
        <div className="topbar__btn-new-label">
          <div />
        </div>
        <p className="topbar__avatar-name"> Add Funds </p>        
      </button>
    </div>
  );
};

export default TopbarAddFunds;
