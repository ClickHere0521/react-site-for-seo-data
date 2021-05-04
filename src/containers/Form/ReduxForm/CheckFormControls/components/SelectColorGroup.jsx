import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import { formGroup } from './CheckFormControlsData';

const SelectColorGroup = ({ name }) => (
  <div>
    <p>Select color</p>
    <div className="form__select-color">
      {formGroup.map(item => (
        <div key={`index_${item.color}`} className="form__form-group form__form-group-field">
          <Field
            name={`${item.color}_${name}`}
            component={renderCheckBoxField}
            defaultChecked={item.defaultChecked}
            color={item.color}
            className="colored"
          />
        </div>
      ))}
    </div>
  </div>
);

SelectColorGroup.propTypes = {
  name: PropTypes.string,
};

SelectColorGroup.defaultProps = {
  name: '',
};

export default SelectColorGroup;
