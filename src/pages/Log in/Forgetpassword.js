/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { modalStatus } from "../../Redux/HomeSlice";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import "./login.css";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
const Forgetpassword = () => {
  return (
    <div>
    <div className="title-modal d-flex flex-column justifiy-content-center align-items-center w-100">
      <img src={logo} className="logo-in" />
      
    </div>

    <div className="form-section w-100 d-flex flex-column justifiy-content-center align-items-center">
      <Form className="all-form w-100">
        <div className="mb-3 edit-roe w-100 d-flex justify-content-center w-100 align-items-center">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label className='w-100 text-center' style={{fontSize:'22px' , fontWeight:'bold'}}>
              Email<span>*</span>
            </Form.Label>
            <Form.Control required type="email" placeholder='Enter your email ' />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </div>

     

        <div className="d-flex justify-content-center w-100 align-items-center">
          <Button className="btn-send mb-2 sign-in p-0" type="submit">
           SEND-CODE
          </Button>
        </div>
      </Form>
    </div>

   
  </div>
  )
}

export default Forgetpassword
