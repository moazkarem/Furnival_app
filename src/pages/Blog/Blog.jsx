/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FaAnglesUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../Redux/HomeSlice";
import Spinner from "react-bootstrap/Spinner";
import "../Contact/Contact.css";
import { FaHouse } from "react-icons/fa6";
import "./blog.css";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { blogs, loading } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  const [top, setTop] = useState(false);
  window.onscroll = () => {
    if (window.scrollY >= 600) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
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
          <span className="me-2">Blogs </span>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={top === false ? "top-hide" : "topShow"}
      >
        {" "}
        <FaAnglesUp />{" "}
      </button>
      <div className="">
        {loading === true ? (
          <div className=" blogs-load col-lg-5 col-md-5 col-sm-10">
            <Spinner
              className=""
              animation="border"
              style={{ color: "#133a5e" }}
            />
          </div>
        ) : (
          <div className=" container mt-5 mb-5   ">
            <div className="row me-2 justifiy-content-center">
              {blogs.map((blog) => (
                <div
                  className="all-cont-blog col-lg-6 col-md-5 col-sm-10  "
                  key={blog.id}
                >
                  <div className="img-blog">
                    <img src={blog.image} alt="image blog" />
                    <button
                      onClick={() => navigate(`/detailsblogs/${blog.id}`)}
                      type="button"
                      className="btn round  read-more"
                    >
                      Read More
                    </button>
                  </div>
                  <div className="blog-details p-2 m-2">
                    <h5> {blog.name} </h5>
                    <h6>{blog.date}</h6>
                    <p>{blog.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
