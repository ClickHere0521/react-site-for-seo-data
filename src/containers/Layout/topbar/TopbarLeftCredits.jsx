import React, { useState } from 'react';
import CreditCardIcon from 'mdi-react/CreditCardIcon';

const TopbarLeftCredits = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNotification = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__collapse">
      <button className="topbar__btn" type="button" onClick={toggleNotification}>
        <CreditCardIcon />
        <p className="topbar__avatar-name"> 1000 Credits Left </p>
      </button>
    </div>
  );
};

export default TopbarLeftCredits;
