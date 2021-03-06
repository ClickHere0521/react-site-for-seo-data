import React from 'react';
import {
  Card, CardBody, Col, 
} from 'reactstrap';
import Modal from '@/shared/components/Modal';

const rocket = `${process.env.PUBLIC_URL}/img/pricing_cards/001-rocket.svg`;

const CardPremium = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <CardBody className="pricing-card pricing-card--danger">
        <div className="pricing-card__body">
          <img className="pricing-card__img" src={rocket} alt="" />
          <h3 className="pricing-card__plan">Premium</h3>
          <hr />
          <p className="pricing-card__price">$200<span>/pack</span></p>
          <p className="pricing-card__feature">500 credits</p>
          <p className="pricing-card__feature">Keyword Search</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Download Report</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Free support</p>
          <Modal
            color="primary"
            title="Congratulations!"
            btn="Buy Now"
            message="Checkout with Paypal"      
            type="premium"      
          />
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default CardPremium;
