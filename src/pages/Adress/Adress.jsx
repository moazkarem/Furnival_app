import React from 'react'
import Header from "../../components/Header/Header";

import "../Profile/profile.css";
import profilee from "../../assets/images/profile.jpg";
import { FaBars } from "react-icons/fa6";
import { FaOutdent } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { useSelector } from "react-redux";
import { modalStatus } from '../../Redux/HomeSlice';
import { useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import { FaCheck } from "react-icons/fa6";

import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
const Adress = () => {
    const { cart, addAdress } = useSelector((state) => state.home);
    const dispatch = useDispatch
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
        Address{" "}
      </h1>
      <div>
      <button
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      class=" add-details"
      onClick={() => dispatch(modalStatus("adrespae"))}
    >
      {" "}
      Add New Address{" "}
    </button>
      </div>


      <div className="left-address-cart col-lg-8">
      {addAdress.length === 0
        ? ""
        : addAdress.map((adress, idx) => (
            <div className="container " key={idx}>
              <div className="mb-2">
                <span className="me-3 chck">
                  <FaCheck />
                </span>
                <span className="nam-addres">{adress.name}</span>
              </div>
              <div className="mb-2">
                <span className="me-3 adres-type">
                  <FaLocationDot />
                </span>
                <span className="adres-type">{adress.addres}</span>{" "}
                <span>{adress.city}</span>
              </div>
              <div className="mb-2">
                <span className="me-3 phone-addres">
                  {" "}
                  <FaPhone />{" "}
                </span>
                <span className="phone-addres">{adress.phone}</span>
              </div>
            </div>
          ))}
    
     
    </div>

  





    </div>
    </div>
  )
}

export default Adress
