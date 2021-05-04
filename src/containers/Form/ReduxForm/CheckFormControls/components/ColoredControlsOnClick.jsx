import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { reduxForm } from 'redux-form';
import { Card, CardBody, Col } from 'reactstrap';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const ColoredControlsOnClick = ({ handleSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.check_form_controls.colored_controls_on_click')}</h5>
            <h5 className="subhead">Checkboxes and radio buttons. Use class
              <span className="red-text"> colored-click</span>
            </h5>
          </div>
          <form className="form form--preview" onSubmit={handleSubmit}>
            <SelectColorGroup name="on_click" />
            <CheckBoxGroup name="on_click" className="colored-click" />
            <RadioButtonsGroup name="on_click" className="colored-click" />
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

ColoredControlsOnClick.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'defaults_controls_colored_click', // a unique identifier for this form
})(ColoredControlsOnClick);
