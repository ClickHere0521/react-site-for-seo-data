import React from 'react';
import MoneyIcon from 'mdi-react/MoneyIcon';
import { Link } from 'react-router-dom';

const TopbarAddFunds = () => (
  <div className="topbar__collapse">
    <Link className="topbar__btn topbar__btn--new" type="button" to="/default_pages/pricing_cards">
      <MoneyIcon />
      {/* <div className="topbar__btn-new-label">
        <div />
      </div> */}
      <p className="topbar__avatar-name"> Add Funds </p>        
    </Link>
  </div>
  );

export default TopbarAddFunds;
