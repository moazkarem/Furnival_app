import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_two from "../../assets/images/carousil/slide2.jpg";
import slide_three from "../../assets/images/carousil/slide3.jpg";
import slide_four from "../../assets/images/carousil/slide4.jpg";
import Button from "react-bootstrap/Button";
import "./Carousil.css";
const Carousil = () => {
  return (
    <div>
      <Carousel data-bs-theme="dark" className="cars">
        <Carousel.Item>
          <div className="end-slide">
            <div className="cont-item-cars d-flex justify-content-evenly align-items-center">
              <div className="text-intro me-5">
                <h3>Better interiors</h3>
                <p>
                  the perfect place for every contemporary furniture store and
                  manufacturies . this is furniture
                </p>
                <Button className="btns p-0" variant="primary">
                  View More
                </Button>{" "}
              </div>
              <div className="imgs-content d-flex ">
                <div className="slide-small me-4"></div>
                <div className="slide-small2"></div>
              </div>
            </div>
          </div>
          <img
            className="d-block w-100 bg-cras"
            src={slide_two}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="end-slide">
            <div className="cont-item-cars d-flex justify-content-evenly align-items-center">
              <div className="text-intro">
                <h3>Better interiors</h3>
                <p className="">
                  the perfect place for every contemporary furniture store and
                  manufacturies . this is furniture
                </p>
                <Button className="btns" variant="primary">
                  View More
                </Button>{" "}
              </div>
              <div className="imgs-content d-flex ">
                <div className="slide-small me-4"></div>
                <div className="slide-small2"></div>
              </div>
            </div>
          </div>
          <img
            className="d-block w-100 bg-cras"
            src={slide_three}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <div className="end-slide">
            <div className="cont-item-cars d-flex justify-content-evenly align-items-center">
              <div className="text-intro">
                <h3>Better interiors</h3>
                <p>
                  the perfect place for every contemporary furniture store and
                  manufacturies . this is furniture
                </p>
                <Button className="btns" variant="primary">
                  View More{" "}
                </Button>{" "}
              </div>
              <div className="imgs-content d-flex ">
                <div className="slide-small me-4"></div>
                <div className="slide-small2"></div>
              </div>
            </div>
          </div>
          <img
            className="d-block w-100 bg-cras"
            src={slide_four}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Carousil;
