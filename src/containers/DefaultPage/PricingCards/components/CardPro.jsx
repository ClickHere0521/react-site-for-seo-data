import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const airplane = `${process.env.PUBLIC_URL}/img/pricing_cards/003-airplane.svg`;

const CardPro = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <CardBody className="pricing-card pricing-card--warning">
        <div className="pricing-card__body">
          <img className="pricing-card__img" src={airplane} alt="" />
          <h3 className="pricing-card__plan">Pro</h3>
          <hr />
          <p className="pricing-card__price">$150<span>/pack</span></p>
          <p className="pricing-card__feature">375 credits</p>
          <p className="pricing-card__feature">Keyword Search</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Download Report</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Free support</p>
          <Button className="pricing-card__button" color="primary">Buy Now</Button>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default CardPro;
