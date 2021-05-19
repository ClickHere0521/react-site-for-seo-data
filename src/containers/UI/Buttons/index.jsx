import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import showResults from './Show';

const BasicForm = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">KEYWORDS DATA EXPLORER</h3>
        <h3 className="page-subhead subhead">Keyword Data Explorer will help you appreciate the scale of information that DataForSEO Keyword Data API provides. 
          To get a full understanding of the fields used in the request and response snippets
        </h3>
      </Col>
    </Row>
    <Row>
      <HorizontalForm onSubmit={showResults} />
    </Row>

  </Container>
  );

export default BasicForm;
