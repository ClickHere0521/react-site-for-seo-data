import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { SelectField } from '@/shared/components/form/Select';
import { FormField } from '../../FormHookValidation/components/FormField';

const StepTwo = ({ onSubmit, previousPage }) => {
  const { handleSubmit, control } = useForm();


  return (
    <form className="form form--horizontal wizard__form" onSubmit={handleSubmit(onSubmit)}>
      <h3 className="wizard__title">What’s your address</h3>
      <div className="form__form-group">
        <span className="form__form-group-label">Country</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="country"
            as={SelectField}
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
            ]}
            placeholder="Select country"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">City</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="city"
            as="input"
            type="text"
            placeholder="City name"
          />
        </div>
      </div>
      <div className="form__form-group form__form-group--address">
        <span className="form__form-group-label">Address</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="street_name"
            as="input"
            type="text"
            placeholder="Street name"
          />
          <FormField
            name="building"
            as="input"
            control={control}
            type="text"
            placeholder="Building"
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">ZIP Code</span>
        <div className="form__form-group-field">
          <FormField
            control={control}
            name="zip"
            component="input"
            type="text"
          />
        </div>
      </div>
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
    </form>
  );
};

StepTwo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};

export default StepTwo;
