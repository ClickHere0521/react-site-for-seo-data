import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth0 } from '@/shared/components/auth/withAuth0';
import Loading from '@/shared/components/Loading';
import ModalLoginForm from '@/shared/components/ModalLoginForm';
import { AbstractProvider } from '@/shared/components/auth/AbstractProvider';

const LogIn = (props) => {
  const [error, setError] = useState('');
  const { history, auth: login } = props;

  const {
     loading,
  } = useAuth0();

  if (loading) {
    return (<Loading loading={loading} />);
  }

  const onLogin = (providerName = 'local') => async (userProps) => {
    setError('');
    try {
      const provider = new AbstractProvider(providerName);
      const res = await provider.login(userProps);
      login(provider.getUserObjectByProvider(res));
      history.push('/app_dashboard');
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

export default LogIn;
