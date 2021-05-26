import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import DataReactTable from './components/DataReactTable';
import CreateTableData from './CreateData';
import showResults from './Show';

const BasicForm = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">GOOGLE TRENDS API</h3>
          <h3 className="page-subhead subhead">Google Trends API employs the eponymous Google service to supply you with the following data:<br />
            Keyword popularity rate over time – relative to the highest rate for the specified time period. <br />
            Location-specific keyword popularity rate – relative to the highest rate for the specified region.<br />
            Related topics – users searching for the specified keyword also searched for these topics.<br />
            Related queries – users searching for the specified keyword also searched for these keywords.
          </h3>
        </Col>
      </Row>
      <Row>
        <HorizontalForm onSubmit={showResults} />
      </Row>
      <Row>
        <DataReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default BasicForm;
