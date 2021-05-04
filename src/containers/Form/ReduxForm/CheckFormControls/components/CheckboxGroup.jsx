import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import { checkboxGroup } from './CheckFormControlsData';

const CheckBoxGroup = ({ name, className }) => (
  <div>
    {checkboxGroup.map(item => (
      <div key={`index_${item.label}`} className="form__form-group form__form-group-field">
        <Field
          name={`${item.name}_${name}`}
          component={renderCheckBoxField}
          label={item.label}
          defaultChecked={item.defaultChecked}
          disabled={item.disabled}
          className={className}
        />
      </div>
    ))}
  </div>
);

CheckBoxGroup.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

CheckBoxGroup.defaultProps = {
  name: '',
  className: '',
};

export default CheckBoxGroup;
