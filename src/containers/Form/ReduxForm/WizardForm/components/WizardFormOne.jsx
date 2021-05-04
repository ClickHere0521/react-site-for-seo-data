import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonToolbar } from 'reactstrap';
import EyeIcon from 'mdi-react/EyeIcon';

const WizardFormOne = ({ handleSubmit }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit}>
      <h3 className="wizard__title">Fill your personal data</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">E-mail</span>
        <div className="form__form-group-field">
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="example@mail.com"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Url</span>
        <div className="form__form-group-field">
          <Field
            name="url"
            component="input"
            type="url"
            placeholder="https://themeforest.net"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <Field
            name="password"
            component="input"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
          />
          <button
            type="button"
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            tabIndex="-1"
            onClick={() => showPassword()}
          ><EyeIcon />
          </button>
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" disabled className="previous">Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
    </form>
  );
};

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
