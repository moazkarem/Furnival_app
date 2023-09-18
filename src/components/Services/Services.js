import React from "react";
import "./services.css";
import BgServ from "../../assets/images/serv/services.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";

import { HiWindow } from "react-icons/hi2";

const Services = () => {
  return (
    <div className="serv-sec">
      <h1
        className="container mb-5  "
        style={{
          fontSize: "24px",
          color: "#133a5e",
          fontWeight: "700",
          lineHeight: "32px",
          fontFamily: "poppins , sans-serif",
        }}
      >
        {" "}
        Our services{" "}
      </h1>
      <div className="container all-serv d-flex flex-column ">
        <div className="sec-cards-serv d-flex justifiy-content-center align-items-center">
          <div>
            <h3>
              {" "}
              <HiOutlineShoppingCart />{" "}
            </h3>
            <h1> Fast Shopping </h1>
            <p>Free delivery for order over $100.00</p>
          </div>

          <div>
            <h3>
              {" "}
              <FaPhoneVolume />{" "}
            </h3>
            <h1> Online Support </h1>
            <p>Feel Free to call us & get best support.</p>
          </div>

          <div>
            <h3>
              {" "}
              <HiWindow />{" "}
            </h3>
            <h1>gift voucher</h1>
            <p>Refer a friend & get a surprise gifts</p>
          </div>
          <div>
            <h3>
              {" "}
              <IoIosGift />
            </h3>
            <h1> Secure payment </h1>
            <p>Safe & more secure way to pay online</p>
          </div>
        </div>
        <div className="bg-serv">
          <img src={BgServ} alt="bg services" />
        </div>
      </div>
    </div>
  );
};

export default Services;
