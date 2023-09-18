import React from "react";
import Header from "../../components/Header/Header";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { modalStatus } from "../../Redux/HomeSlice";
import { FaCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { ToastContainer } from "react-bootstrap";
import Footer from '../../components/Footer/Footer'
const Addtheaddress = () => {
  const dispatch = useDispatch();
  const { cart, addAdress } = useSelector((state) => state.home);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div>
      <Header />
      <div className="top-sec mt-5 mb-5 d-flex flex-column justifiy-content-center align-items-center ">
        <div className="content-topsec d-flex  justify-content-between  align-items-center ">
          <div className="spne step-1">1</div>
          <div style={{ backgroundColor: "#ffb921" }} className="spne step-2">
            2
          </div>
          <div className="spne">3</div>
        </div>
        <div className="content-topsec d-flex  justify-content-between  align-items-center ">
          <p className="mt-2">Cart</p>
          <p className="mt-2">Shipping Address & payment Methods</p>
          <p className="mt-2">Place Order</p>
        </div>
      </div>
      <h1
        className="container mb-5"
        style={{ color: "#133a5e", fontSize: "20px", fontWeight: "700" }}
      >
        Shipping Address
      </h1>
      <div className="container">
        <div className="row me-0">
          <div className="left-address-cart col-lg-8">
            {addAdress.length === 0
              ? ""
              : addAdress.map((adress, idx) => (
                  <div className="container" key={idx}>
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
            <div className="w-100 text-center mb-5 ">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class=" add-details"
                onClick={() => dispatch(modalStatus("checkOut"))}
              >
                {" "}
                Add New Address{" "}
              </button>
            </div>
            <h1
              className="container mb-5"
              style={{ color: "#133a5e", fontSize: "20px", fontWeight: "700" }}
            >
              Payment
            </h1>
          </div>
          <div className="right-sectio col-lg-3 d-flex flex-column">
            <div className="w-100 mb-5 func-total ">
              <h3>Order Summary </h3>
              <div className="d-flex justify-content-between w-100">
                <span className="totale">Subtotal</span>
                <span className="pric">${totalPrice}</span>
              </div>
              <br></br>
              <div className="d-flex justify-content-between w-100">
                <span className="totale">Total</span>
                <span className="pric">${totalPrice}</span>
              </div>
              <br></br>
              <div className="mb-2">
                <button
                  style={{ backgroundColor: "#a6adbb" }}
                  className=" apply"
                >
                  {" "}
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />

      <ToastContainer />
    </div>
  );
};

export default Addtheaddress;
