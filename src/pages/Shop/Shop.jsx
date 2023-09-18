import { React, useState } from "react";
import Header from "../../components/Header/Header";
import "./shop.css";
import { FaHouse } from "react-icons/fa6";
import { FaAnglesUp } from "react-icons/fa6";
import ShopData from "./ShopData";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { filterCategory, filterByColor } from "../../Redux/HomeSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Shop = () => {
  // eslint-disable-next-line no-unused-vars
  const { shopPage, loading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [top, setTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 600) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  const filterCateg = ["All", ...new Set(shopPage.map((item) => item.categ))];
  const filtercolor = ["All", ...new Set(shopPage.map((item) => item.color))];
  
  return (
    <div>
      <Header />
      <div className="all-shop">
        <div className="landing-shop flex-column d-flex justify-content-center w-100 align-items-center">
          <h1>Shop</h1>
          <div className="d-flex justify-content-center  align-items-center">
            <h5 className="me-2">
              {" "}
              <FaHouse />{" "}
            </h5>
            <span className="me-2">Home /</span>
            <span className="me-2">Shop </span>
          </div>
        </div>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={top === false ? "top-hide" : "topShow"}
        >
          {" "}
          <FaAnglesUp />{" "}
        </button>
        <div className="all-definition w-100  d-flex justify-content-center  align-items-center">
          <div className="definition-shop mb-5 d-flex justify-content-center flex-column align-items-center">
            <h1>Make your dream home true</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sed tincidunt aliquam
              feugiat nunc tortor. Elementum sit urna arcu velit. Blandit odio
              vestibulum id lacus. Pellentesque turpis vel sed mattis a et eget
              consectetur sit. Sed tincidunt aliquam feugiat nunc tortor.
              Elementum sit urna arcu velit. Blandit odio vestibulum id lacus.
              Pellentesque turpis vel sed mattis a et eget consectetur sit
            </p>
          </div>
        </div>
        <div className="data-section-shop container">
          <div className="row me-0">
            <div className="side-bar mb-3  p-4 col-lg-3 ">
              <input type="text" placeholder="Type here" className="mb-3" />
              <h1>Filter By</h1>
              <div>
                <h3> Category </h3>
                {filterCateg.map((category) => (
                  <p
                    onClick={() => dispatch(filterCategory(category))}
                    style={{ cursor: "pointer", textTransform: "capitalize" }}
                  >
                    {category}
                  </p>
                ))}
              </div>
              <div>
                <h3>Color</h3>
                {filtercolor.map((color) => (
                  <p
                    onClick={() => dispatch(filterByColor(color))}
                    style={{ cursor: "pointer", textTransform: "capitalize" }}
                  >
                    <span
                      style={{ backgroundColor: color }}
                      className=" color-span"
                    ></span>
                    {color}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-9">
              <ShopData />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};
export default Shop;
