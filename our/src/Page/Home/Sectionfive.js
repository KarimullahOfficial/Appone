import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import IOSIMAGE from "../../assets/shop/appstore.png";
import ANDORID from "../../assets/shop/googleplay.png";
import SHOPIMAGE from "../../assets/shop/e-shop.png";
const Sectionfive = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="text-align-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download mobile App and</h4>
              <h2>save up to 20%</h2>
              <p>
                Aliquam a augue suscipit, luctus neque purus ipsum and neque
                dolor primis libero tempus, blandit varius
              </p>
              <Link to="/">
                {" "}
                <img src={IOSIMAGE} alt="IOS" className="img-fluid me-3" />
              </Link>
              <Link to="/">
                {" "}
                <img src={ANDORID} alt="ANDORID" className="img-fluid me-3" />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={SHOPIMAGE} className="img-fluid" alt="shopimge" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sectionfive;
