import React from 'react';
import {
 Col, Container, Row, Card, CardBody, 
} from 'reactstrap';
import CardSlider from './components/CardSlider';
import BoxedCollapseFullWidth from './components/BoxedCollapseFullWidth';

const PricingCards = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Add Funds</h3>
        <h3 className="page-subhead subhead">If you want to get more data from api, please add funds
        </h3>
      </Col>
    </Row>
    <Row>
      <Col md={12} lg={12} xs={12}>
        <Card>
          <CardBody className="pricing-card pricing-card--slider">
            <CardSlider />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row dir="ltr">
      <Col md={12} lg={12} xs={12}>
        <Card>
          <CardBody className="pricing-card pricing-card--slider">
            <BoxedCollapseFullWidth />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default PricingCards;

