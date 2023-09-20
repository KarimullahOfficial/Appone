import React from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import IOSIMAGE from "../../assets/shop/appstore.png";
import ANDORID from "../../assets/shop/googleplay.png";
import SHOPIMAGE from "../../assets/shop/e-shop.png";
import BrandOne from "../../assets/brands/brand-11.png";
import Brandtwo from "../../assets/brands/brand-12.png";
import Brandthree from "../../assets/brands/brand-13.png";
import Brandfour from "../../assets/brands/brand-14.png";
import Brandfive from "../../assets/brands/brand-15.png";
import Brandsix from "../../assets/brands/brand-16.png";
import Brandseven from "../../assets/brands/brand-17.png";
import Brandeight from "../../assets/brands/brand-18.png";
const Sectionfive = () => {
  return (
    <>
      <section className="shop_section">
        <Container>
          {" "}
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
                <img src={IOSIMAGE} alt="IOS" className="img-fluid store me-3" />
              </Link>
              <Link to="/">
                {" "}
                <img src={ANDORID} alt="ANDORID" className="img-fluid store me-3" />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={SHOPIMAGE} className="img-fluid" alt="shopimge" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-item-center justify-content-between">
                    <div className="brand_img">
                      <img
                        src={BrandOne}
                        className="img-fluid"
                        alt="brand-one"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandtwo}
                        className="img-fluid"
                        alt="Brand-two"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandthree}
                        className="img-fluid"
                        alt="Brand-three"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandfour}
                        className="img-fluid"
                        alt="Brand-four"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandfive}
                        className="img-fluid"
                        alt="Brand-five"
                      />
                    </div>
                   
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-item-center justify-content-between">
                     
                    <div className="brand_img">
                      <img
                        src={Brandfour}
                        className="img-fluid"
                        alt="Brand-four"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandfive}
                        className="img-fluid"
                        alt="Brand-five"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandsix}
                        className="img-fluid"
                        alt="Brand-six"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandseven}
                        className="img-fluid"
                        alt="Brand-seven"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={Brandeight}
                        className="img-fluid"
                        alt="Brand-eight"
                      />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sectionfive;
