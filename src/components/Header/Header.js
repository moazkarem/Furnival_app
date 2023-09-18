import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalStatus } from "../../Redux/HomeSlice";
import Login from "../../pages/Log in/Login";
import SignUp from "../../pages/Sign up/SignUp";
import CheckOut from "../../pages/cart/CheckOut";
import Forgetpassword from "../../pages/Log in/Forgetpassword";
import { FaRegHeart } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

const Header = () => {
  const { modalcomponent, logged, isAdmin } = useSelector(
    (state) => state.home
  );
  const modalContent = () => {
    if (modalcomponent === "login") {
      return <Login />;
    } else if (modalcomponent === "sign up") {
      return <SignUp />;
    } else if (modalcomponent === "forget") {
      return <Forgetpassword />;
    } else if (modalcomponent === "checkOut") {
      return <CheckOut />;
    } else if (modalcomponent === "adrespae") {
      return <CheckOut />;
    }
  };
  const dispatch = useDispatch();
  const { cart, favorit } = useSelector((state) => state.home);

  return (
    <div className="all-hea">
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary pt-1 fixed-top d-flex justify-content-center m-0 headere"
        >
          <Container>
            <div className="div-all-ele d-flex justify-content-around align-items-center w-100">
              <div className="left-sec d-flex ">
                <img src={logo} alt="logo-project" className="logo-img" />
                <h3>Furnival</h3>
              </div>
              <div className="links-lars-screen   ">
                <div className="lists-head d-flex justify-content-center align-items-center">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/"}
                    className="link-head me-3 mb-2"
                    href="#action1"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/shop"}
                    className="link-head me-3 mb-2"
                    href="#action2"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/blog"}
                    className="link-head me-3 mb-2"
                    href="#action2"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/about"}
                    className="link-head me-3 mb-2"
                    href="#action2"
                  >
                    About
                  </NavLink>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                    className="link-head me-3 mb-2"
                    href="#action2"
                  >
                    Contact
                  </NavLink>
                  {isAdmin && (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={"/productsadmin"}
                      className="link-head me-5 mb-2"
                      href="#action2"
                    >
                      Admin
                    </NavLink>
                  )}

                  {logged && (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={"/cart"}
                      className="link-head shop-cart me-4 mb-2"
                      href="#action2"
                    >
                      <FaShoppingCart />
                      <Badge className="badge p-0">{cart.length}</Badge>
                    </NavLink>
                  )}

                  {logged && (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={"/whishlist"}
                      className="link-head shop-cart me-4 mb-2"
                      href="#action2"
                    >
                      <FaRegHeart />
                      <Badge className="badge p-0">{favorit.length}</Badge>
                    </NavLink>
                  )}
                  {logged && (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={"/profile"}
                      className="link-head me-4 mb-2"
                      href="#action2"
                    >
                      <FaUserLarge />
                    </NavLink>
                  )}
                </div>
              </div>
              <div className="btn-log">
                <Button
                  onClick={() => dispatch(modalStatus("login"))}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="login  p-0 mb-2"
                  variant="warning"
                >
                  LOGIN
                </Button>{" "}
              </div>
            </div>

            <Navbar.Toggle
              className="tog-icon  m-0 p-0"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Shop</Nav.Link>
                  <Nav.Link href="#action2">Blog</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action2">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog d-flex justify-content-center w-100 align-items-center modal-dialog-centered">
          <div class="modal-content py-4">{modalContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
