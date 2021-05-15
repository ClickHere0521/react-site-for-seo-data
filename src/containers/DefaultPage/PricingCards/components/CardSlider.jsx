import React from 'react';
import { useTranslation } from 'react-i18next';
import {
 Card, CardBody, Col, ButtonToolbar, 
} from 'reactstrap';
import Slider from '@/shared/components/range_slider/Slider';
import Modal from '@/shared/components/Modal';

const CardSlider = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">Get the reasonable price you want</h5>
            <h5 className="subhead">You can choose with <span className="red-text">slider</span></h5>
          </div>
          <div dir="ltr">
            <Slider
              min={30}
              max={200}
              value={100}
              marks={{
                30: '30',
                40: '40',
                50: '50',
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
                110: '110',
                120: '120',
                130: '130',
                140: '140',
                150: '150',
                160: '160',
                170: '170',
                180: '180',
                190: '190',
                200: '200',
              }}
            />
          </div>          

        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <ButtonToolbar>
            <Modal
              color="primary"
              title="Congratulations!"
              btn="Buy Now"
              message="Checkout with Paypal"
            />
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CardSlider;
