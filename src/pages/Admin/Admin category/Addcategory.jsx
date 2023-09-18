import {React , useState , useEffect} from 'react'
import './Addcategory.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

import Form from "react-bootstrap/Form";

import { insertcategory } from '../../../Redux/HomeSlice';
import Col from "react-bootstrap/Col";
import { FaHouse } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa6";
import Row from "react-bootstrap/Row";
import { useDispatch } from 'react-redux';
const Addcategory = () => {
    const [id, setid] = useState("");
    const [image, setMainimage] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const HandelAddCategory = (event)=>{
        event.preventDefault()
        const insertedData = {
          id ,
          image
       
        }    
        dispatch(insertcategory(insertedData))
        .unwrap()
        .then(() => {
          setid(null);
          setMainimage(null);
          navigate("/alladmincategory");
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
  <div className="p-3 content-adminproducts content-add-categ">
  
  <h1 className="title-admin mb-2 ">Hey There In Furnival</h1>
  <p className="p-01">Our Dashbord To Show every Thing In The Site</p>
  <p className="p-02 ">
    {" "}
    Home / Admin / <span style={{ color: "#ffb921" }}>
      Add Products
    </span>{" "}
  </p>


  <div className="section-form-add">
          <form onSubmit={HandelAddCategory}>
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

            

              <div className="text-center">
                <button className="save-add"> Save </button>
              </div>
            </div>
          </form>
        </div>
  
  
  </div>
    </div>
  )
}

export default Addcategory
