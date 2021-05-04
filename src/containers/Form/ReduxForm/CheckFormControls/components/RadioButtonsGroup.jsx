import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import { radioButtonsGroup } from './CheckFormControlsData';

const RadioButtonGroup = ({ name, className }) => (
  <div>
    {radioButtonsGroup.map(item => (
      <div key={`index_${item.label}`} className="form__form-group form__form-group-field">
        <Field
          name={`${item.name}_${name}`}
          component={renderRadioButtonField}
          label={item.label}
          radioValue={item.radioValue}
          defaultChecked={item.defaultChecked}
          disabled={item.disabled}
          className={className}
        />
      </div>
    ))}
  </div>
);

RadioButtonGroup.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
  name: '',
  className: '',
};

export default RadioButtonGroup;
