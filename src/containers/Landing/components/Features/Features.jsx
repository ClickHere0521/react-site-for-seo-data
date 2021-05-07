import React from 'react';
import {
 Container, Row, Col, Card, CardBody, CardHeader, 
} from 'reactstrap';

// Import Section Title
import SectionTitle from '../Common/Section-title';
import FeatureBox from './Feature-box';

// Import Images
const feature1 = `${process.env.PUBLIC_URL}/img/landing/features/img-1.png`;
const feature2 = `${process.env.PUBLIC_URL}/img/landing/features/img-2.png`;

const Features = () => {
  const smallFeatures1 = [
    { title: 'Donec quam felis' },
    { title: 'Ultricies nec' },
  ];
  const smallFeatures2 = [
    { title: 'Donec quam felis' },
    { title: 'Ultricies nec' },
  ];

  return (
    <React.Fragment>
      <section className="section" id="features">
        <Container>
          <SectionTitle
            subtitle="Features"
            title="Key features of the product"
            desc="It will be as simple as occidental in fact, it will be Occidental."
          />

          <Row>
            <Col lg={5}>
              <div>
                <FeatureBox
                  icon="bar-chart-2"
                  title="Improve your Marketing business"
                  smallFeatures={smallFeatures1}
                  desc="If several languages coalesce, the grammar of the resulting language is more simple and regular."
                  link="#"
                />
              </div>
            </Col>

            <Col lg={5} sm={8} className="ml-lg-auto">
              <Card className="border border-light shadow-none mt-5 mt-lg-0">
                <CardHeader className="border-0 bg-transparent">
                  <div>
                    <i className="mdi mdi-circle text-danger mr-1" />
                    <i className="mdi mdi-circle text-warning mr-1 ml-1" />
                    <i className="mdi mdi-circle text-success mr-1 ml-1" />
                  </div>
                </CardHeader>
                <CardBody className="bg-light">
                  <div className="box-shadow">
                    <img
                      src={feature1}
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5 pt-5">
            <Col lg={5} sm={8}>
              <Card className="border border-light shadow-none">
                <CardHeader className=" border-0 bg-transparent">
                  <div>
                    <i className="mdi mdi-circle text-danger mr-1" />
                    <i className="mdi mdi-circle text-warning mr-1 ml-1" />
                    <i className="mdi mdi-circle text-success mr-1 ml-1" />
                  </div>
                </CardHeader>
                <CardBody className="bg-light">
                  <div className="box-shadow">
                    <img
                      src={feature2}
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg={5} className="ml-lg-auto">
              <div className="mt-4 mt-lg-0">
                <FeatureBox
                  icon="pie-chart"
                  title="Increase your Marketing Performance"
                  smallFeatures={smallFeatures2}
                  desc="If several languages coalesce, the grammar of the resulting language is more simple and regular."
                  link="#"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Features;
