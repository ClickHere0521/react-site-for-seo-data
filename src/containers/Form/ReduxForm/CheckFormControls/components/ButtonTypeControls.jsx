import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const ButtonTypeControls = ({ handleSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.check_form_controls.button_type_controls')}</h5>
            <h5 className="subhead">Checkboxes and radio buttons. Use class
              <span className="red-text"> button</span>
            </h5>
          </div>
          <form className="form form--preview" onSubmit={handleSubmit}>
            <SelectColorGroup name="type" />
            <CheckBoxGroup name="type" className="button" />
            <RadioButtonsGroup name="type" className="button" />
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

ButtonTypeControls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'button_type_controls', // a unique identifier for this form
})(ButtonTypeControls);
