import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@/shared/components/auth/withAuth0';
import Loading from '@/shared/components/Loading';
import ModalLoginForm from '@/shared/components/ModalLoginForm';
import { AbstractProvider } from '@/shared/components/auth/AbstractProvider';
import { withRouter } from 'react-router';
import { connect, useDispatch } from 'react-redux';
import { auth } from '@/redux/actions/authActions';
import firebase from 'firebase';
import { userInfoActions, updateActivityActions } from '@/redux/actions/userInfoActions';

const LogIn = (props) => {
  const [error, setError] = useState('');
  const { history, auth: login } = props;
  const userInfoDispatch = useDispatch();
  const activityUpdateDispatch = useDispatch();

  const {
     loading,
  } = useAuth0();

  if (loading) {
    return (<Loading loading={loading} />);
  }

  const onLogin = providerName => async (userProps) => {
    setError('');    
    try {
      const today = new Date();
      const todayDate = [];
      const provider = new AbstractProvider(providerName);
      const res = await provider.login(userProps);    
      const db = firebase.database().ref(`/users/${res.user.uid}`);  
      let currentActivity;
      let userInfo;       
      let length = 0;
      const filteredActivity = [];
      login(provider.getUserObjectByProvider(res));
      db.once('value')
        .then((snapshot) => {          
          userInfo = snapshot.val();
          userInfo.visits += 1;
          userInfoDispatch(userInfoActions(userInfo));
          db.update({
            visits: userInfo.visits,
          });
          firebase.firestore().collection('Activity').doc(res.user.uid).get()
          .then((querySnapShot) => {
              currentActivity = querySnapShot.data().Activities;
              for (let i = 0; i < 7; i += 1) {
                todayDate[i] = `${today.getFullYear() }-${ today.getMonth() + 1 }-${ today.getDate() - i}`;
              }
              for (let i = 0; i < 7; i += 1) {
                length = filteredActivity.length;
                currentActivity.forEach((val) => {
                  if (val.date === todayDate[i]) {
                    filteredActivity.push({
                      date: todayDate[i],
                      fetchedData: val.fetchedData,
                    });
                  }
                });
                if (length === filteredActivity.length) {
                  filteredActivity.push({
                    date: todayDate[i],
                    fetchedData: 0,
                  });
                }
              }
              const sortArray = [...filteredActivity].sort((a, b) => {
                if (a.date < b.date) return -1;
                if (a.date > b.date) return 1;
                return 0;
              });
              activityUpdateDispatch(updateActivityActions(sortArray));
          });
        });
      history.push('/api_dashboard');
    } catch (e) {
      setError(e.message);
    }
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
            <h4 className="account__subhead subhead">Search your data easily</h4>
          </div>
          <ModalLoginForm
            title="Sign in with Firebase"
            isOpen
            error={error}
            form="log_in_modal"
            onLogin={onLogin}
          />
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  auth: PropTypes.func.isRequired,
};

export default connect(() => {}, { auth })(withRouter(LogIn));
