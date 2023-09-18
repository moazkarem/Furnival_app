/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect } from "react";
import { getBestSelling } from "../../Redux/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "./Bestselling.css";
import { FaStar } from "react-icons/fa";
const BestSelling = () => {
  const dispatch = useDispatch();
  const { BestSelling, loading } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getBestSelling());
  }, [dispatch]);
  return (
    <div className="all-best">
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
        Best Selling{" "}
      </h1>
      {loading ? (
        <div className="container">
          <Spinner
            className=""
            animation="border"
            style={{ color: "#133a5e" }}
          />
        </div>
      ) : (
        <div key={BestSelling.id} className="d-flex container">
          {BestSelling.map((item) => (
            <div className="best-sel-cards me-3 mb-3 ">
              <img src={item.image} />
              <div className="details-best d-flex flex-column">
                <p> {item.name} </p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="icon-star">
                    {" "}
                    <FaStar />{" "}
                  </span>
                  <span className="price"> ${item.price} </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default BestSelling;
