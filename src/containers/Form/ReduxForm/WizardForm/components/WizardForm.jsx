import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import WizardFormOne from './WizardFormOne';
import WizardFormTwo from './WizardFormTwo';
import WizardFormThree from './WizardFormThree';

const WizardForm = ({ onSubmit }) => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <CardBody className="wizard">
            <div className="wizard__steps">
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Step 1</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Step 2</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Step 3</p></div>
            </div>
            <div className="wizard__form-wrapper">
              {page === 1 && <WizardFormOne onSubmit={nextPage} />}
              {page === 2
              && (
              <WizardFormTwo
                previousPage={previousPage}
                onSubmit={nextPage}
              />
              )}
              {page === 3
              && (
              <WizardFormThree
                previousPage={previousPage}
                onSubmit={onSubmit}
              />
              )}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
