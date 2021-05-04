import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { useForm } from 'react-hook-form';
import EyeIcon from 'mdi-react/EyeIcon';
import { FormField } from '../../FormHookValidation/components/FormField';

const StepTwo = ({ onSubmit }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const { handleSubmit, control } = useForm();

  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="wizard__title">Fill your personal data</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Username</span>
        <div className="form__form-group-field">
          <FormField
            name="username"
            as="input"
            placeholder="Name"
            control={control}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">E-mail</span>
        <div className="form__form-group-field">
          <FormField
            name="email"
            as="input"
            type="email"
            placeholder="example@mail.com"
            control={control}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Url</span>
        <div className="form__form-group-field">
          <FormField
            name="url"
            as="input"
            control={control}
            type="url"
            placeholder="https://themeforest.net"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">Password</span>
        <div className="form__form-group-field">
          <FormField
            name="password"
            as="input"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder="Password"
            control={control}
          />
          <button
            type="button"
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            tabIndex="-1"
            onClick={showPassword}
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

StepTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default StepTwo;
