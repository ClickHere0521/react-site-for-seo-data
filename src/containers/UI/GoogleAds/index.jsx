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
          <h3 className="page-title">GOOGLE ADS API</h3>
          <h3 className="page-subhead subhead">The returned results are specific to the indicated language and location parameters. We use Google AdWords API as a data source. 
            Thus, the locations supported in Keywords Data API are identical to Google Geographical Targeting.
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
