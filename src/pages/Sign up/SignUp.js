/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { modalStatus } from "../../Redux/HomeSlice";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/logo.png";
import '../Log in/login.css'
import Button from "react-bootstrap/Button";
import { sign_up } from '../../Redux/HomeSlice';
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [user , setUser] = useState('')
  const [email , setEmail] = useState('')
  const [pass , setPass] = useState('')
  const [confirm , setConfirm] = useState('')
  const navigate =useNavigate()
    const dispatch = useDispatch()
  const handekSignUp = (event)=>{
    event.preventDefault()
    const userSignUp = {
      user ,
      email ,
      pass ,
      confirm
    }
    dispatch(sign_up(userSignUp))
    .unwrap()
    .then(() => {
      setUser(null)
      setEmail(null)
      setPass(null)
      setConfirm(null)
      navigate("/");
    });
  }


  return (
    <div>
    <div>
    <div className="title-modal d-flex flex-column justifiy-content-center align-items-center w-100">
      <img src={logo} className="logo-in" />
      <h3> Create Account </h3>
    </div>

    <div className="form-section w-100 d-flex flex-column justifiy-content-center align-items-center">
      <Form onSubmit={handekSignUp} className="all-form w-100">
        <div className="mb-3 edit-roe w-100 d-flex justify-content-center w-100 align-items-center">
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Label>
              User name <span>*</span>
            </Form.Label>
            <Form.Control required type="text" value={user} onChange={(e)=>setUser(e.currentTarget.value)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
        <Form.Group md="4" controlId="validationCustom02">
          <Form.Label>
            Email<span>*</span>
          </Form.Label>
          <Form.Control required type="email" value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </div>

        <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
        <Form.Group md="4" controlId="validationCustom03">
          <Form.Label>
             Password<span>*</span>
          </Form.Label>
          <Form.Control required type="password" value={pass} onChange={(e)=>setPass(e.currentTarget.value)} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </div>
        <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
          <Form.Group md="4" controlId="validationCustom04">
            <Form.Label>
            Confirm Password<span>*</span>
            </Form.Label>
            <Form.Control required type="password" value={confirm} onChange={(e)=>setConfirm(e.currentTarget.value)} />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </div>

        <div className="d-flex justify-content-center w-100 align-items-center">
          <Button data-bs-dismiss="modal" className="btn-send mb-2 sign-in p-0" type="submit">
            Sign-Up
          </Button>
        </div>
      </Form>
    </div>

  
    <p className="w-100 mb-2 text-center have-account">
      {" "}
     Already have account , {" "}
      <span onClick={() => dispatch(modalStatus("login"))}>
        {" "}
        sign in{" "}
      </span>{" "}
    </p>
  </div>
    </div>
  )
}

export default SignUp
