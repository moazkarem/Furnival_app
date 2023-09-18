import { React, useEffect, useState } from "react";
import "../Admin.css";
import "../AdminProducts.css";
import "./addproduct.css";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import { insertProduct } from "../../../Redux/HomeSlice";

import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

import "../Admin.css";
import { FaHouse } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa6";
const AddProduct = () => {
  const [id, setid] = useState("");
  const [image, setMainimage] = useState("");
  const [name, setname] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [categ, setcateg] = useState("");
  const [color, setcolor] = useState("");
  const [img1, setfirst] = useState("");
  const [img2, setsecond] = useState("");
  const [img3, setthird] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const HandelFormAdd = (event)=>{
    event.preventDefault()
    const insertedData = {
      id ,
      image,
      name,
      title ,
      price ,
      categ ,
      color ,
      img1 ,
      img2 ,
      img3
    }    
    dispatch(insertProduct(insertedData))
    .unwrap()
    .then(() => {
      setid(null)
      setMainimage(null)
      setname(null)
      settitle(null)
      setprice(null)
      setcateg(null)
      setcolor(null)
      setfirst(null)
      setsecond(null)
      setthird(null)
      navigate("/productsadmin");
    });
  }
  return (
    <div>
    <div className="side-bar-admine pt-4">
    <div className="left-sec sec-admin d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex mb-2">
        <img src={logo} alt="logo-project" className="logo-img" />
        <h3>Furnival</h3>
      </div>
      <p>Best Place For Your Furniture</p>
    </div>

    <div className="element-admin ps-5 mb-4">
      <span className="pe-3"><FaHouse /></span>
      <span>Home</span>
    </div>
    <div
      onClick={() => navigate("/shop")}
      className="element-admin ps-5 mb-4"
    >
      <span className="pe-3"> <BsFillGridFill /> </span>
      <span>Shop page</span>
    </div>
    <div
      onClick={()=>navigate('/productsadmin')}
      className="element-admin ps-5 mb-4"
    >
      <span className="pe-3"> <BsFillBoxSeamFill /> </span>
      <span>All Products</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3"> <BsReverseLayoutTextWindowReverse /> </span>
      <span>Orders</span>
    </div>
    <div onClick={()=>navigate('/alladmincategory')} className="element-admin ps-5 mb-4">
      <span className="pe-3"> <FaDelicious /> </span>
      <span>All Categorys</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3"> <FaUserLarge /> </span>
      <span>Users</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3"> <FaMarker /> </span>
      <span>Blogs</span>
    </div>
  </div>
      <div className="p-3 content-adminproducts">
        <h1 className="title-admin mb-2 ">Hey There In Furnival</h1>
        <p className="p-01">Our Dashbord To Show every Thing In The Site</p>
        <p className="p-02 ">
          {" "}
          Home / Admin / <span style={{ color: "#ffb921" }}>
            Add Products
          </span>{" "}
        </p>

        <div className="section-form-add">
          <form onSubmit={HandelFormAdd}>
            <div className="sec-inputs-add">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Id
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={id} onChange={(e)=>setid(e.currentTarget.value)} />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Main image
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={image} onChange={(e)=>setMainimage(e.currentTarget.value)} />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={name} onChange={(e)=>setname(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Title
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={title} onChange={(e)=>settitle(e.currentTarget.value)} />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Price
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={price} onChange={(e)=>setprice(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Categ
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={categ} onChange={(e)=>setcateg(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  color
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={color} onChange={(e)=>setcolor(e.currentTarget.value)}/>
                </Col>
              </Form.Group>


              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  First Image
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={img1} onChange={(e)=>setfirst(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Second Image
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={img2} onChange={(e)=>setsecond(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2" className="label-add">
                  Third Image
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={img3} onChange={(e)=>setthird(e.currentTarget.value)}/>
                </Col>
              </Form.Group>

              <div className="text-center">
                <button className="save-add"> Save </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
