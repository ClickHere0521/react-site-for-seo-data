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
          <h3 className="page-title">GOOGLE SHOPPING API</h3>
          <h3 className="page-subhead subhead">Google Shopping is an e-commerce platform featuring product advertisements placed by various merchants. 
            While Google Shopping ads connect your retail business with millions of users performing shopping-related searches,
            SEMSEARCHES API will connect you with valuable e-commerce data from Google Shopping.
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
