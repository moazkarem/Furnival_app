/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import { React, useState } from "react";
import UseBlogsDetails from "../../hooks/use-blogs-details";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaAnglesUp } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
const Detailblogs = () => {
  const [top, setTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 300) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  const { oneBlog, loading } = UseBlogsDetails();
  return (
    <div>
      <Header />
      <div className="landing-contact land-blog flex-column d-flex justify-content-center w-100 align-items-center">
        <h1>Blogs</h1>
        <div className="d-flex justify-content-center  align-items-center">
          <h5 className="me-2">
            {" "}
            <FaHouse />{" "}
          </h5>
          <span className="me-2">Home /</span>
          <span className="me-2">Blogs / </span>
          <span className="me-2">Blog Details </span>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={top === false ? "top-hide" : "topShow"}
      >
        {" "}
        <FaAnglesUp />{" "}
      </button>
      {loading === true ? (
        <div className="load-blog">
          <Spinner
            className=""
            animation="border"
            style={{ color: "#133a5e" }}
          />
        </div>
      ) : (
        <div className="container mt-5 blog-det d-flex justifiy-content-center align-items-center flex-column">
          <h2> {oneBlog.name} </h2>
          <h4>{oneBlog.date}</h4>
          <img src={oneBlog.image} alt="blog image" />
          <div className="p-5 ps-0 title-div">
            <p className=""> {oneBlog.title} </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Detailblogs;
