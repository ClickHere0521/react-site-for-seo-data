import React from 'react';
import {
 Col, Container, Row, Card, CardBody, 
} from 'reactstrap';
import CardBasic from './components/CardBasic';
import CardSpecial from './components/CardSpecial';
import CardPro from './components/CardPro';
import CardPremium from './components/CardPremium';
import CardSlider from './components/CardSlider';

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
      <CardBasic />
      <CardSpecial />
      <CardPro />
      <CardPremium />
    </Row>
  </Container>
);

export default PricingCards;
