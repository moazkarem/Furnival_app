import React, { useState } from "react";

import "../Log in/login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AddAdress } from "../../Redux/HomeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [addres, setadress] = useState("");
  const [city, setcity] = useState("");
   
   const handelerAddaddress = (event)=>{
    event.preventDefault()
    const dataAddress = {name , phone ,addres , city}
    dispatch(AddAdress(dataAddress))
    navigate('/addadress')
    setName('')
    setPhone('')
    setadress('')
    setcity('')
    
   } 
  return (
    <div>
      <div>
        <div>
          <div className="title-modal d-flex flex-column justifiy-content-center align-items-center w-100">
            <h3> Add New Address</h3>
          </div>

          <div className="form-section w-100 d-flex flex-column justifiy-content-center align-items-center">
            <Form onSubmit={handelerAddaddress} className="all-form w-100">
              <div className="mb-3 edit-roe w-100 d-flex justify-content-center w-100 align-items-center">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>
                    Name <span>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ex. Moaz Karem"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>
                    Phone number<span>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ex. 01095652781"
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>
                    Address<span>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Ex. 12 St Oraby"
                    value={addres}
                    onChange={(e) => setadress(e.currentTarget.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              
              <div className="mb-3 edit-roe d-flex justify-content-center w-100 align-items-center">
              <Form.Group md="4" controlId="validationCustom02">
                <Form.Label>
                  City<span>*</span>
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Ex.Giza"
                  value={city}
                  onChange={(e) => setcity(e.currentTarget.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </div>

              <div className="d-flex justify-content-center w-100 align-items-center">
                <Button className="btn-send mb-2 sign-in p-0" type="submit">
                  Add Address ?
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
 
    </div>
  );
  
};

export default CheckOut;
