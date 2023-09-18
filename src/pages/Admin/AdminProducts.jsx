/* eslint-disable jsx-a11y/img-redundant-alt */
import { React, useEffect } from "react";
import "./Admin.css";
import "./AdminProducts.css";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getShop } from "../../Redux/HomeSlice";
import { FaPenToSquare } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { deleteProductadmin } from "../../Redux/HomeSlice";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import { FaHouse } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { FaDelicious } from "react-icons/fa6";
import { FaMarker } from "react-icons/fa6";
const AdminProducts = () => {
 
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { filtercolor , shopPage } = useSelector((state) => state.home);
  
  useEffect(() => {
    dispatch(getShop());
  }, [dispatch]);

 
  const deleteProduct = (item) => {
    Swal.fire({
      icon: "error",
      title: `${item.name} will be deleted`,
      showCancelButton: true,
    }).then((e) => {
      if (e.isConfirmed) {
        dispatch(deleteProductadmin(item));
      }
    });
  };
  return (
    <div>
      <div className="side-bar-admine pt-4">
        <div className="left-sec sec-admin d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex mb-2">
            <img src={logo} alt="logo-project" className="logo-img" />
            <h3>Furnival</h3>
          </div>
          <p>Best Place For Your Furniture</p>
        </div>

        <div className="element-admin ps-5 mb-4">
          <span className="pe-3"><FaHouse /></span>
          <span>Home</span>
        </div>
        <div
          onClick={() => navigate("/shop")}
          className="element-admin ps-5 mb-4"
        >
          <span className="pe-3"> <BsFillGridFill /> </span>
          <span>Shop page</span>
        </div>
        <div
          
          className="element-admin ps-5 mb-4"
        >
          <span className="pe-3"> <BsFillBoxSeamFill /> </span>
          <span>All Products</span>
        </div>
        <div className="element-admin ps-5 mb-4">
          <span className="pe-3"> <BsReverseLayoutTextWindowReverse /> </span>
          <span>Orders</span>
        </div>
        <div onClick={()=>navigate('/alladmincategory')} className="element-admin ps-5 mb-4">
          <span className="pe-3"> <FaDelicious /> </span>
          <span>All Categorys</span>
        </div>
        <div className="element-admin ps-5 mb-4">
          <span className="pe-3"> <FaUserLarge /> </span>
          <span>Users</span>
        </div>
        <div className="element-admin ps-5 mb-4">
          <span className="pe-3"> <FaMarker /> </span>
          <span>Blogs</span>
        </div>
      </div>
      <div className="content-adminproducts p-3">
        <h1 className="title-admin mb-2 ">Hey There In Furnival</h1>
        <p className="p-01">Our Dashbord To Show every Thing In The Site</p>
        <p className="p-02">
          {" "}
          Home / Admin / <span style={{ color: "#ffb921" }}>
            All Products
          </span>{" "}
        </p>
        <button
          onClick={() => navigate("/addproduct")}
          className="Add-product-admin mb-3"
        >
          {" "}
          Add New Product{" "}
        </button>

        <table className="table-products">
          <thead>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>color</th>
              <th>Edit</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
            {shopPage.map((product) => (
              <tr key={product.id}>
                <td>#{product.id}</td>
                <td>{product.name}</td>
                <td>
                  {" "}
                  <img
                    src={product.image}
                    alt="product image"
                    className="product-admin-image"
                  />{" "}
                </td>
                <td> {product.price} </td>
                <td> {product.color} </td>
                <td onClick={()=>navigate(`/${product.id}/editproducts`)} style={{cursor:'pointer'}}> <span className="edit-icon"> <FaPenToSquare /> </span> </td>
                <td style={{cursor:'pointer'}} onClick={()=>navigate(`/details/${product.id}`)}> <span className="view-admin">View</span> </td>
                <td style={{cursor:'pointer'}}>
                  <span className="del-icon-admin" onClick={()=>deleteProduct(product)}>
                    <BsFillTrash3Fill />
                  </span>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminProducts;
