import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import DataReactTable from './components/DataReactTable';
import CreateTableData from '../CreateData';
import showResults from './Show';


const BasicForm = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">SERP EXPLORER</h3>
          <h3 className="page-subhead subhead">This API will provide you with structured data on the top 100 search results based on a keyword, search engine, location, and other parameters. 
            If you want to better understand the fields used in request and response snippets, or get familiar with all parameters available in SERP API
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
