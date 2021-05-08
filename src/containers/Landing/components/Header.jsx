import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';

// Import Images
const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;
const homeImg = `${process.env.PUBLIC_URL}/img/landing/home-img.png`;

const Header = () => (
  <div className="landing__header" style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <section className="hero-section" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="hero-wrapper mb-4">
                <p className="font-16 text-uppercase">Get the SEO data today</p>
                <h1 className="hero-title mb-4">Make your Business Amazing & Awesome with <span className="text-primary">JOEL</span></h1>

                <p>To a Business person, it will seem like simplified SEO tool, as a kind friend of his work</p>

                <div className="mt-4">
                  <Link to="/" className="btn btn-primary mt-2 mr-2">Get Started</Link>
                  <Link to="/" className="btn btn-success mt-2 mr-2 ml-1">Learn more</Link>
                </div>
              </div>

            </Col>

            <Col lg={6} sm={8}>
              <div className="home-img mt-5 mt-lg-0">
                <img src={homeImg} alt="" className="img-fluid mx-auto d-block" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  </div>
);

export default Header;
