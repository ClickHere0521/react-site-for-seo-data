import React, { useState } from 'react';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import { useSelector } from 'react-redux';

const TopbarLeftCredits = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const remainCredits = useSelector(state => state.credits.remaincredits);
  const toggleNotification = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__collapse">
      <button className="topbar__btn" type="button" onClick={toggleNotification}>
        <CreditCardIcon />
        <p className="topbar__avatar-name"> {remainCredits} Credits Left </p>
      </button>
    </div>
  );
};

export default TopbarLeftCredits;
