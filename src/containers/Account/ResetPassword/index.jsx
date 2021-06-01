import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ResetPasswordForm from '@/shared/components/reset_password/ResetPasswordForm';
import { ButtonToolbar, Button, Modal } from 'reactstrap';
import firebase from 'firebase';

const ResetPassword = (props) => {
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const onSubmit = (item) => {
    if (item.email) {
      firebase.auth().sendPasswordResetEmail(item.email).then(() => {
        setModal(true);
        setIsSuccess(true);
        setMessage('We have sent the reset link to your email. \n Please check your email inbox.');
      }).catch((error) => {
        setModal(true);
        setIsSuccess(false);
        setMessage(error.message);
      });
    } else {
      setModal(true);
      setMessage('Please enter your email address');
      setIsSuccess(false);
    }
  };

  const toggle = () => {
    setModal(prevState => !prevState);
  };

  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <span className="account__logo"> SEM
                <span className="account__logo-accent">SEARCHES</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Password reset</h4>
          </div>
          <ResetPasswordForm
            {...props}
            onSubmit={onSubmit}
            form="reset_password_form"
          />
          <div className="account__have-account">
            <p>Remember your password?  <NavLink to="/log_in">Login</NavLink></p>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        toggle={toggle}
        modalClassName="ltr-support"
        className="modal-dialog--primary modal-dialog"
      >
        <div className="modal__header">
          <button
            className="lnr lnr-cross modal__close-btn"
            aria-label="modal__close-btn"
            type="button"
            onClick={toggle}
          />
          <h4 className="text-modal  modal__title">{isSuccess ? 'Success' : 'Failed' }</h4>
        </div>
        <div className="modal_body">
          <h5 className="text-modal  modal__body">{message}</h5>
        </div>
        <ButtonToolbar className="modal__footer">
          <Button className="modal_ok" color="primary" onClick={toggle}>OK</Button>
        </ButtonToolbar>
      </Modal>
    </div>
  );
};

export default ResetPassword;
