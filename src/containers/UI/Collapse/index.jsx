import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import showResults from './Show';

const BasicForm = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">ONPAGE API EXPLORER (INSTANT PAGES)</h3>
        <h3 className="page-subhead subhead">Using this function you will get page-specific data with detailed information on how well a particular page is optimized for organic search. 
          This endpoint has a Live method and doesn’t require making a separate GET request for obtaining task results. If you want to better 
          understand the fields used in request and response snippets, or get familiar with all parameters available in OnPage API Instant Pages
        </h3>
      </Col>
    </Row>
    <Row>
      <HorizontalForm onSubmit={showResults} />
    </Row>

  </Container>
  );

export default BasicForm;
