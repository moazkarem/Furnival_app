/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Header from "../../components/Header/Header";
import "./cart.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { deletefromCard, increase, decrease } from "../../Redux/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import emptycard from "../../assets/images/empty-card.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer/Footer'
const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.home);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div>
      <Header />
      {cart.length === 0 ? (
        <div className="w-100 empt flex-column d-flex justifiy-content-center align-items-center">
          <img src={emptycard} />
          <h2>Your shopping cart looks empty</h2>
        </div>
      ) : (
        <div>
          <div className="top-sec mt-5 mb-5 d-flex flex-column justifiy-content-center align-items-center ">
            <div className="content-topsec d-flex  justify-content-between  align-items-center ">
            <div style={{backgroundColor:'#ffb921'}} className="spne step-1">1</div>
            <div className="spne step-2">2</div>
            <div className="spne">3</div>
            </div>
            <div className="content-topsec d-flex  justify-content-between  align-items-center ">
            <p className="mt-2">Cart</p>
            <p className="mt-2">Shipping Address & payment Methods</p>
            <p className="mt-2">Place Order</p>
            </div>
          </div>
          <div className="cards-content mb-5 p-3  container">
            <div className="row me-0">
              <div className="all-lift col-lg-8">
                {cart.map((product) => (
                  <div className="left-side p-3 me-3 mb-3 d-flex justifiy-content-center align-items-center col-lg-12 col-md-8 col-sm-12">
                    <div className="sec-img me-4">
                      <img
                        src={product.image}
                        alt="cards image"
                        className="product-imge"
                      />
                    </div>
                    <div className="sec-details  d-flex flex-column">
                      <div className="first-div d-flex justify-content-between align-items-center  mb-3">
                        <span className="name-prod "> {product.name} </span>
                        <span
                          onClick={() => dispatch(deletefromCard(product))}
                          className="icon-del"
                        >
                          {" "}
                          <BsFillTrash3Fill />{" "}
                        </span>
                      </div>
                      <div className="sec-div mb-3 d-flex justify-content-between align-items-center">
                        <span className="total-units">
                          {" "}
                          Total Price all units{" "}
                        </span>
                        <span className="price">
                          {" "}
                          {product.price * product.quantity}{" "}
                        </span>
                      </div>
                      <div className="end-div d-flex justify-content-between align-items-center">
                        <span className="total-units">
                          {" "}
                          price per unit {product.price}{" "}
                        </span>
                        <button
                          onClick={() => dispatch(increase(product))}
                          className="control-prod"
                        >
                          {" "}
                          +{" "}
                        </button>{" "}
                        <span className="quantity-prod">
                          {" "}
                          {product.quantity}{" "}
                        </span>{" "}
                        <button
                          disabled={product.quantity === 1 ? true : false}
                          onClick={() => dispatch(decrease(product))}
                          className="control-prod"
                        >
                          {" "}
                          -{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="right-sectio mb-5 col-lg-3 d-flex flex-column">
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
                    <button className=" apply">Apply Coupon </button>
                  </div>
                </div>
                <div >
                  <button onClick={()=> navigate('/addadress')} className="btn-cart">CHECKOUT</button> <br></br>
                  <button className="btn-cart ">CLEAR CART </button>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Cart;
