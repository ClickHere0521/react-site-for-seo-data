import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { Card, CardBody, Col } from 'reactstrap';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const DefaultControls = ({ handleSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.check_form_controls.default_controls')}</h5>
            <h5 className="subhead">Checkboxes and radio buttons</h5>
          </div>
          <form className="form form--preview" onSubmit={handleSubmit}>
            <SelectColorGroup />
            <CheckBoxGroup />
            <RadioButtonsGroup />
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

DefaultControls.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'defaults_controls', // a unique identifier for this form
})(DefaultControls);
