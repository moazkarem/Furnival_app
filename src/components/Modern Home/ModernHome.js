/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ModernHome.css";
import topLeft from "../../assets/images/modern/left-top.png";
import topRight from "../../assets/images/modern/right-top.png";
import bottomLeft from "../../assets/images/modern/bottom-right.png";
import bigright from "../../assets/images/modern/big-right.png";
import smallright from "../../assets/images/modern/small-right.png";
const ModernHome = () => {
  return (
    <div className="modern-sec">
      <h1
        className="container mb-4  "
        style={{
          fontSize: "24px",
          color: "#133a5e",
          fontWeight: "700",
          lineHeight: "32px",
          fontFamily: "poppins , sans-serif",
        }}
      >
        {" "}
        Modern Home Ideas{" "}
      </h1>
      <div className="container">
        <div className="row me-0">
          <div className="left-modern-sec col-lg-8 flex-column">
            <div className="top-side d-flex justifiy-content-center align-items-center">
              <img
                src={topLeft}
                alt="top left"
                className="top-left-img same-top me-3 mb-3"
              />
              <img
                src={topRight}
                alt="top left"
                className="top-right-img same-top mb-3"
              />
            </div>

            <div className="bottom side">
              <img
                src={bottomLeft}
                className="big-bottom "
                alt="big img bottom"
              />
            </div>
          </div>

          <div className="right-modern-sec col-lg-4 flex-column ">
            <img
              src={bigright}
              className="big-right ms-3 mb-3"
              alt="bog-right"
            />
            <img
              src={smallright}
              className="small-right ms-3 mb-3"
              alt="small-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHome;
