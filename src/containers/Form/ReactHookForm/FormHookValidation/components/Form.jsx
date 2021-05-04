import React, { useState } from 'react';
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import EyeIcon from 'mdi-react/EyeIcon';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { emailPatter, urlPattern } from '@/shared/helpers';
import showResults from '../../../Show';
import { FormField } from './FormField';

const Form = ({ isHorizontal, isAboveError }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    errors,
  } = useForm();

  const showPassword = () => {
    setIsPasswordShown(prevState => !prevState);
  };

  const onSubmit = data => showResults(data);

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.from_validation.horizontal_form_validate')}</h5>
            <h5 className="subhead">
              {
                isAboveError
                  ? (
                    <span>Errors are above fields, use class super
                      <span className="red-text"> form__form-group-input-wrap--error-above</span>
                    </span>
                  )
              : 'Errors are under fields'
              }
            </h5>
          </div>
          <form className={`form ${isHorizontal && 'form--horizontal'}`} onSubmit={handleSubmit(onSubmit)}>
            <div className="form__form-group">
              <span className="form__form-group-label">Username</span>
              <div className="form__form-group-field">
                <FormField
                  name="username"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">E-mail</span>
              <div className="form__form-group-field">
                <FormField
                  name="email"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: 'This is required field',
                    pattern: {
                      value: emailPatter,
                      message: 'Entered value does not match email format',
                    },
                  }}
                  defaultValue=""
                  isAboveError={isAboveError}
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Url</span>
              <div className="form__form-group-field">
                <FormField
                  name="url"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: 'This is required field',
                    pattern: {
                      value: urlPattern,
                      message: 'invalid url',
                    },
                  }}
                  placeholder="https://themeforest.com"
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Password</span>
              <div className="form__form-group-field">
                <FormField
                  name="password"
                  type={isPasswordShown ? 'text' : 'password'}
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  placeholder="Password"
                  isAboveError={isAboveError}
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
            <div className="form__form-group">
              <span className="form__form-group-label">Select Option</span>
              <div className="form__form-group-field">
                <FormField
                  name="select"
                  control={control}
                  component={SelectField}
                  errors={errors}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                  ]}
                  rules={{ required: 'This is required field' }}
                  defaultValue=""
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Validate</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

Form.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

Form.defaultProps = {
  isHorizontal: false,
  isAboveError: false,
};

export default Form;
