import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Container } from 'reactstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const logo = `${process.env.PUBLIC_URL}/img/landing/logo_dark.png`;

const Landing = () => (
  <div className="landing">
    <div className="landing__menu">
      <Container>
        <Row>
          <Col>
            <div className="landing__menu-wrap">
              <div className="landing__menu-logo">
                <img src={logo} alt="" />
              </div>
              <nav className="landing__menu-nav">
                <div>
                  <a
                    className="landing__btn landing__btn--nav landing__btn--gradient"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/log_in"
                  >
                    Get Started
                  </a>
                  <a
                    className="landing__btn landing__btn--nav landing__btn--hire-us"
                    target="_blank"
                    rel="noopener noreferrer"
                    // eslint-disable-next-line max-len
                    href="/log_in"
                  >
                    Learn More
                  </a>
                </div>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Header />
    <Footer />
  </div>
  );

export default connect(state => ({ theme: state.theme }))(Landing);
