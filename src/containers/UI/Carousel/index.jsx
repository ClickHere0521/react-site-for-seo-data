import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import showResults from './Show';

const BasicForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">BUSINESS DATA EXPLORER</h3>
          <h3 className="page-subhead subhead">Business Data API is intended for obtaining Google My Business data on local establishments
            based on its brand name (i.e., keyword), GMB business id (i.e., cid), or Google Maps id (i.e., place_id).
          </h3>
        </Col>
      </Row>
      <Row>
        <HorizontalForm onSubmit={showResults} />
      </Row>

    </Container>
  );
};

export default BasicForm;
