import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

export const FormField = ({
    name,
    errors,
    control,
    component,
    isAboveError,
    ...other
  }) => (
    <div className={`form__form-group-input-wrap ${isAboveError ? 'form__form-group-input-wrap--error-above' : ''}`}>
      <Controller
        name={name}
        as={component}
        control={control}
        {...other}
      />
      {errors?.[name] && <span className="form__form-group-error">{errors[name].message}</span>}
    </div>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
  isAboveError: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

FormField.defaultProps = {
  errors: null,
  isAboveError: false,
  component: 'input',
};

export default FormField;
