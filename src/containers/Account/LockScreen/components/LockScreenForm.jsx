import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';

const AccountForm = ({ handleSubmit }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__form-group form__form-group--forgot">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <Field
            name="password"
            component="input"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            type="button"
            onClick={showPassword}
          ><EyeIcon />
          </button>
        </div>
        <div className="account__forgot-password">
          <NavLink to="/reset_password">Forgot a password?</NavLink>
        </div>
      </div>
      <NavLink className="btn btn-primary account__btn" to="/api_dashboard">Unlock</NavLink>
      <NavLink className="btn btn-outline-danger account__btn" to="/api_dashboard">Logout</NavLink>
    </form>
  );
};

AccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'account_lock_form', // a unique identifier for this form
})(AccountForm);
