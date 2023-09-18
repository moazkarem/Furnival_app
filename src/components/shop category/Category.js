/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./Category.css";
import { useDispatch, useSelector } from "react-redux";
import { getCateg } from "../../Redux/HomeSlice";
import { BsFillCircleFill } from "react-icons/bs";
import Spinner from "react-bootstrap/Spinner";
const Category = () => {
  const { categ, loading } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const items = 4;
  const [curent, setCurent] = useState(1);
  const Npage = Math.ceil(categ.length / items);
  const startIndex = (curent - 1) * items;
  const endIndex = startIndex + items;
  const dataPerPage = categ.slice(startIndex, endIndex);
  useEffect(() => {
    dispatch(getCateg());
  }, [dispatch]);
  return (
    <div key={dataPerPage.id}>
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
        Shop by category{" "}
      </h1>
      <div className="catege">
        <div className="container d-flex justifiy-content-center ">
          {loading ? (
            <div className="d-flex justifiy-content-center w-100">
              <Spinner animation="border" style={{ color: "#133a5e" }} />;
            </div>
          ) : (
            dataPerPage.map((item) => (
              <div key={item.id} className="img-cont me-3 mb-3 ">
                <img
                  className="img-categ"
                  src={item.image}
                  alt="image category"
                />
              </div>
            ))
          )}
        </div>

        <div className="  pagin ">
          {Array.from({ length: Npage }, (_, i) => i + 1).map((page) => (
            <span className="me-2" onClick={() => setCurent(page)}>
              {" "}
              <BsFillCircleFill />{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
