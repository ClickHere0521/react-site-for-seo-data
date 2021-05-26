import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import firebase from 'firebase/app';
import RegisterForm from '@/shared/components/login_register/LoginRegisterForm';

const Register = ({ history }) => {
  const [error, setError] = useState('');

  const registerFireBase = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        const db = firebase.database().ref(`/users/${userCredential.user.uid}`); 
        db.set({
          uid: userCredential.user.uid,
          credits: 0,
          email: user.email,
          password: user.password,
          username: user.username,
          visits: 0,
        });        
        history.push('/log_in');
      })
      .catch((err) => {
        setError(err.message);
      });
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
            <h4 className="account__subhead subhead">Create an account</h4>
          </div>
          <RegisterForm onSubmit={registerFireBase} errorMessage={error} />
          <div className="account__have-account">
            <p>Already have an account? <NavLink to="/log_in">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Register);
