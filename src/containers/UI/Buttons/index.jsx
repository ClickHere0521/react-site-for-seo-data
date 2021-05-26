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
          <h3 className="page-title">AMAZON MERCHANT API</h3>
          <h3 className="page-subhead subhead">Using Amazon Merchant API you can get results from Amazon product listings and related data. 
            The returned results are specific to the specified keyword, language and location parameters. We emulate set location with 
            the highest accuracy so that the results you receive will match the actual search results for the specified parameters at the time of task setting. 
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
