import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import LogInForm from './loginForm/LogInForm';
import { providers } from './auth/AbstractProvider';

const ModalLoginForm = ({
  error, onLogin,
}) => (
  <div>
    <LogInForm
      onSubmit={onLogin(providers.LOCAL)}
      errorMessage={error}
      form="modal_login"
      fieldUser="E-mail"
      typeFieldUser="email"
    />
    <div className="account__or">
      <p>Or Easily Using</p>
    </div>
    <div className="account__social">
      <Button
        className="account__social-btn account__social-btn--facebook"
        type="button"
        onClick={onLogin(providers.FACEBOOK)}
      >
        <FacebookIcon />
      </Button>
      <Button
        className="account__social-btn account__social-btn--google"
        type="button"
        onClick={onLogin(providers.GOOGLE)}
      >
        <GooglePlusIcon />
      </Button>
    </div>
  </div>
);

ModalLoginForm.propTypes = {
  error: PropTypes.string,
  onLogin: PropTypes.func,
};

ModalLoginForm.defaultProps = {
  error: '',
  onLogin: () => () => {},
};

export default ModalLoginForm;
