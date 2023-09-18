/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { modalStatus } from "../../Redux/HomeSlice";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import "./login.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="title-modal d-flex flex-column justifiy-content-center align-items-center w-100">
        <img src={logo} className="logo-in" />
        <h3> Login </h3>
      </div>

      <div className="form-section w-100 d-flex flex-column justifiy-content-center align-items-center">
        <Form className="all-form w-100">
          <div className="mb-3 edit-roe w-100 d-flex justify-content-center w-100 align-items-center">
            <Form.Group md="4" controlId="validationCustom01">
              <Form.Label>
                Email<span>*</span>
              </Form.Label>
              <Form.Control required type="email" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
            <Form.Group md="4" controlId="validationCustom02">
              <Form.Label>
                Password<span>*</span>
              </Form.Label>
              <Form.Control required type="password" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="d-flex justify-content-center w-100 align-items-center">
            <Button className="btn-send mb-2 sign-in p-0" type="submit">
              Sign In
            </Button>
          </div>
        </Form>
      </div>

      <p onClick={() => dispatch(modalStatus("forget"))}  className="w-100 mb-2 text-center forget"> forget password ? </p>
      <p className="w-100 mb-2 text-center have-account">
        {" "}
        Don't have account , ?{" "}
        <span onClick={() => dispatch(modalStatus("sign up"))}>
          {" "}
          sign up{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default Login;
