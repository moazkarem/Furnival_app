/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../components/Header/Header";
import "./Contact.css";
import { FaHouse } from "react-icons/fa6";
import { useState } from "react";
import { FaAnglesUp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import vectorimg from "../../assets/images/Vector.png";
import Footer from "../../components/Footer/Footer";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [top, setTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 600) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  return (
    <div className="all-con">
      <Header />
      <div className="all-con">
        <div className="landing-contact flex-column d-flex justify-content-center w-100 align-items-center">
          <h1>Contact Us</h1>
          <div className="d-flex justify-content-center  align-items-center">
            <h5 className="me-2">
              {" "}
              <FaHouse />{" "}
            </h5>
            <span className="me-2">Home /</span>
            <span className="me-2">Contact Us </span>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={top === false ? "top-hide" : "topShow"}
        >
          {" "}
          <FaAnglesUp />{" "}
        </button>

        <div className="contact-info d-flex justify-content-between w-100 align-items-center container">
          <div>
            <h5 className="mb-5">
              <FaPhone />
            </h5>
            <p>01095652781</p>
          </div>
          <div>
            <h5 className="mb-5">
              <FaRegEnvelope />
            </h5>
            <p>Furnival@gmail.com</p>
          </div>
          <div>
            <h5 className="mb-5">
              <FaLocationDot />
            </h5>
            <p>Ismailia, ITI</p>
          </div>
        </div>

        <div className="contact-form container d-flex justify-content-between">
          <div className="contact-img col-lg-4">
            <img src={vectorimg} alt="radious image" className="vector-img" />
          </div>
          <div className="form-section ">
            <Form className="all-form w-100">
              <div className="mb-3 edit-roe">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>
                    First name<span>*</span>
                  </Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>
                    Last name<span>*</span>
                  </Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="mb-3 edit-roe">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>
                    Email<span>*</span>
                  </Form.Label>
                  <Form.Control required type="email" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>
                    Phone<span>*</span>
                  </Form.Label>
                  <Form.Control required type="text" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="mb-3 edit-roe">
                <Form.Group
                  as={Col}
                  lg="8"
                  md="4"
                  controlId="validationCustom02"
                >
                  <Form.Label>
                    Message<span>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    style={{ height: "100px" }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="d-flex justify-content-center w-100 align-items-center">
                <Button className="btn-send p-0" type="submit">
                  Send Message
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
