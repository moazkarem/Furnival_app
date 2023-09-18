/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./detail.css";
import useDetailsUse from "../../hooks/use-details-use";
import Header from "../../components/Header/Header";
import BestSelling from "../../components/Best selling/BestSelling";
import Footer from "../../components/Footer/Footer";
import { addTocard } from "../../Redux/HomeSlice";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { FaRegHeart } from "react-icons/fa6";
import { AddTo_Whishlist } from "../../Redux/HomeSlice";
import Spinner from "react-bootstrap/Spinner";
const DetailUser = () => {
  const dispatch = useDispatch();
  const { detailUser, loading } = useDetailsUse();
  return (
    <div>
      <Header />
      <div className="container mt-5">
        {loading === true ? (
          <div className="w-100 load-blog">
            <Spinner
              className=""
              animation="border"
              style={{ color: "#133a5e" }}
            />
          </div>
        ) : (
          <div className="row me-0 mb-5">
            <div className="left-details col-lg-8 d-flex  justify-content-center align-items-center ">
              <div className="left-imge-det d-flex flex-column justify-content-center align-items-center ">
                <img
                  src={detailUser.img1}
                  alt="img1"
                  className="left-imge me-3 mb-2"
                />
                <img
                  src={detailUser.img2}
                  alt="img1"
                  className="left-imge me-4 mb-2"
                />
                <img
                  src={detailUser.img3}
                  alt="img1"
                  className="left-imge me-2 mb-2"
                />
              </div>
              <div className="main-img0det">
                <img
                  src={detailUser.image}
                  alt="main img"
                  className="main-img-det"
                />
                <span onClick={() => dispatch(AddTo_Whishlist(detailUser))}>
                  {" "}
                  <FaRegHeart />{" "}
                </span>
              </div>
            </div>
            <div className="righte-details mt-2 col-lg-3 ms-3">
              <h4> {detailUser.name} </h4>
              <p className="p-price"> {detailUser.price} LE </p>
              <p className="p-title"> {detailUser.title} </p>
              <p className="p-color">
                {" "}
                color : <span>{detailUser.color} </span>
              </p>
              <button
                onClick={() => dispatch(addTocard(detailUser))}
                class=" add-details"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <BestSelling />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default DetailUser;
