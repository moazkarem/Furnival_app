import React from "react";
import "./Footer.css";
import container from "bootstrap";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="">
      <footer className="footer ">
        <div className="all-con-footer">
          <div className="alle container f-flex flex-coulmun pb-5">
            <div className="footer-element pt-5  me-0 row ">
              <div className="sed-1 mb-3 col-lg-3 col-md-6 col-sm-12 ">
                <h2>furnival</h2>
                <p>
                  The Perfect Place For Every Contemporary Furniture Store And
                  Manufacturer. This Is Furnival
                </p>
                <div className="icon-social">
                  <span className="">
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                  <span>
                    <FaWhatsapp />
                  </span>
                  <span>
                    <FaPinterestP />
                  </span>
                </div>
              </div>
              <div className="sed-2 mb-3 col-lg-3 col-md-6 col-sm-12">
                <h3>quike links</h3>
                <hr />
                <div className="list-quike">
                  <ul>
                    <li>About Us</li>
                    <li>Blogs & Articls</li>
                    <li>
                      Terms & <br /> Conditions{" "}
                    </li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="sed-3 mb-3 col-lg-3 col-md-6 col-sm-12">
                <h3>categ</h3>
                <hr />
                <div className="two-lists d-flex">
                  <div className="list-quike">
                    <ul>
                      <li>sofas</li>
                      <li>chairs</li>
                      <li> doors </li>
                    </ul>
                  </div>
                  <div className="list-quike">
                    <ul>
                      <li>lambs</li>
                      <li>tables</li>
                      <li>drawers </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sed-4 mb-3 col-lg-3 col-md-6 col-sm-12">
                <h3>contact</h3>
                <hr />
                <div className="all-contact">
                  <div className="mb-3">
                    <span className="me-2">
                      <FaLocationDot />
                    </span>
                    <span className="titl">ITI, Ismailia, Egypt</span>
                  </div>
                  <div className="mb-3">
                    <span className="me-2">
                      <FaRegEnvelope />
                    </span>
                    <span className="titl">Furnival@example.com</span>
                  </div>
                  <div className="mb-3">
                    <span className="me-2">
                      <FaPhone />
                    </span>
                    <span className="titl">+000 000 0000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="end-foot  d-flex justify-content-between align-items-center">
              <div>
                <span className="me-3"> Terms Of Use </span>
                <span className="me-3"> Privacy & Policy </span>
              </div>
              <div>
                <span>2023 © Furnival. All Rights are Reserved</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
