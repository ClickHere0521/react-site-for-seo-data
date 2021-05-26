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
          <h3 className="page-title">KEYWORD RESEARCH API</h3>
          <h3 className="page-subhead subhead">You can get up to 4680 keyword ideas by specifying the search depth. Each related keyword comes with the list of relevant product categories, 
            search volume rate for the last month, search volume trend for the previous 12 months, as well as current cost-per-click and competition values. Moreover, this endpoint supplies minimum, 
            maximum and average values of daily impressions, clicks and CPC for each result.
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
