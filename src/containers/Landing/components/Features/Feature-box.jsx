import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

const FeatureBox = (props) => {
  const {
 icon, title, desc, smallFeatures, link, 
} = { ...props };

  return (
    <React.Fragment>
      <div className="avatar-md mb-4">
        <span className="avatar-title rounded-circle bg-soft-primary">
          <i>
            <FeatherIcon icon={icon} className="icon-dual-primary" />
          </i>
        </span>
      </div>
      <h5>{title}</h5>
      <p className="mb-4">{desc}</p>

      <Row>
        {smallFeatures.map(sFeature => (
          <Col sm={6} key={sFeature.title}>
            <p>
              <i>
                <FeatherIcon icon="check" className="icon-dual-success mr-2" />
              </i>{' '}
              {sFeature.title}
            </p>
          </Col>
        ))}
      </Row>

      <div className="mt-4">
        <Link to={link} className="btn btn-primary">
          Learn more{' '}
          <i>
            <FeatherIcon icon="arrow-right" className="icons-sm ml-1" />
          </i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default FeatureBox;
