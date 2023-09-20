import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";
import userone from "../../assets/blog/imagetwo.jpeg";
import usertwo from "../../assets/blog/imageone.png";
import userthree from "../../assets/blog/imagefour.jpg";
import userfour from "../../assets/blog/imagethree.png";
import userfive from "../../assets/blog/imagefour.jpg";

const Sectionsix = () => {
  return (
    <>
      <section className="blog_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={userone} className="img-fluid" alt="userone " />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> By Karimullah</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={usertwo} className="img-fluid" alt="user-two  " />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> By Karimullah</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img
                      src={userthree}
                      className="img-fluid"
                      alt="userthree "
                    />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> By Karimullah</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={userfour} className="img-fluid" alt="userfour " />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> By Karimullah</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={userfive} className="img-fluid" alt="userfive " />
                  </div>
                  <p>
                    " Etiam sapien sem at sagittis congue augue massa varius
                    sodales sapien undo tempus dolor egestas magna suscipit
                    magna tempus aliquet porta sodales augue suscipit luctus
                    neque "
                  </p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                  <h5> By Karimullah</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sectionsix;
