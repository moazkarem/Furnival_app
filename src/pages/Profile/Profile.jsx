/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../components/Header/Header";

import "./profile.css";
import profilee from "../../assets/images/profile.jpg";
import { FaBars } from "react-icons/fa6";
import { FaOutdent } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Profile = () => {
const navigate = useNavigate()
  const inputref = useRef(null)
  const[images , setimages] = useState("")
  const handelref =()=>{
   inputref.current.click()
  }
  const handelimageChange =(e)=>{
      const file = e.currentTarget.files[0]
      console.log(file);
      setimages(e.currentTarget.files[0])
     }

  const { profileList } = useSelector((state) => state.home);
  console.log(profileList, "proo");
  const [togle, setToggle] = useState(false);

  return (
    <div>
      <Header />

      <div
        className="side-bar-profile"
        style={{ width: togle === true ? "50px" : "300px" }}
      >
        <div
          className="toggle-icon  pe-2"
          style={{
            textAlign: togle === true ? "start" : "end",
            padding: togle ? "15px" : "",
          }}
        >
          <span className="togg-icon " onClick={() => setToggle(!togle)}>
            <FaBars />
          </span>
        </div>
        <div className="sec-img-profile d-flex flex-column justifiy-content-center align-items-center">
        <div onClick={handelref} className="w-100 d-flex flex-column justifiy-content-center align-items-center">
        {images ? <img
          style={{ display: togle === true ? "none" : "block" }}
          src={URL.createObjectURL(images)}
          alt="image profile"
        />:<img
        style={{ display: togle === true ? "none" : "block" }}
        src={profilee}
        alt="image profile"
      />}
       
      <input type="file" ref={inputref} style={{display:'none'}} onChange={handelimageChange}/>
        </div>
        
          <h4 style={{ display: togle === true ? "none" : "block" }}>
            {" "}
            Hi , {profileList.user}
          </h4>
          <p style={{ display: togle === true ? "none" : "block" }}>
            {profileList.email}
          </p>
        </div>
        <hr style={{ display: togle === true ? "none" : "block" }} />
        <div className="user-info w-100 ">
          <div
            className="info-account "
            style={{ paddingLeft: togle === true ? "15px" : "50px" }}
          >
            <span className="me-2">
              <FaUserLarge />{" "}
            </span>
            <span style={{ display: togle === true ? "none" : "block" }}>
              Profile
            </span>
          </div>
          <div
            className="info-account"
            style={{ paddingLeft: togle === true ? "15px" : "50px" }}
          >
            <span className="me-2">
              {" "}
              <FaRegHeart />{" "}
            </span>
            <span style={{ display: togle === true ? "none" : "block" }}>
              whishlist
            </span>
          </div>
          <div
            className="info-account"
            style={{ paddingLeft: togle === true ? "15px" : "50px" }}
          >
            <span className="me-2">
              {" "}
              <FaOutdent />{" "}
            </span>
            <span style={{ display: togle === true ? "none" : "block" }}>
              Orders
            </span>
          </div>
          <div
            className="info-account"
            style={{ paddingLeft: togle === true ? "15px" : "50px" }}
            onClick={()=>navigate('/address')}
          >
            <span className="me-2">
              <FaLocationDot />{" "}
            </span>
            <span style={{ display: togle === true ? "none" : "block" }}>
              Addresses
            </span>
          </div>
        </div>
      </div>

      <div
        className="right-content-profile "
        style={{ marginLeft: togle === true ? "50px" : "300px" }}
      >
        <h1
          className="container mb-4 mt-4 "
          style={{
            fontSize: "24px",
            color: "#133a5e",
            fontWeight: "700",
            lineHeight: "32px",
            fontFamily: "poppins , sans-serif",
          }}
        >
          {" "}
          Profile{" "}
        </h1>




        <div className="container">
        <Form className="d-flex justifiy-content-center align-items-start flex-column w-100">
        <div className="w-100 mb-3 d-flex justifiy-content-center align-items-center ">
        <Form.Group className="me-4 profile-input" style={{ width: togle === true ? "380px" : "340px" }}   controlId="validationCustom03">
            <Form.Label>User Name <span>*</span></Form.Label>
            <Form.Control type="text"  required  value={profileList.user}/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className=" profile-input" style={{ width: togle === true ? "380px" : "340px" }}  controlId="validationCustom03">
          <Form.Label>Email <span>*</span></Form.Label>
          <Form.Control type="email"  required value={profileList.email} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        </div>
          

       
<div>
<Button className="btn-user-info me-3" type="submit">UPDATE INFO</Button>
<Button className="btn-change" >CHANGE Password</Button>
</div>
       
        </Form>
      </div>





      </div>
      
    </div>
  );
};

export default Profile;