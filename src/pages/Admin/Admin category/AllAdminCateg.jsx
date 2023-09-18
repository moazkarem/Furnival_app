/* eslint-disable jsx-a11y/img-redundant-alt */
import {React , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import { FaPenToSquare } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useSelector , useDispatch } from 'react-redux';
import { getCateg  } from '../../../Redux/HomeSlice';
import { deletecategoryadmin } from '../../../Redux/HomeSlice';
import Swal from "sweetalert2";
import { ToastContainer } from 'react-toastify';
const AllAdminCateg = () => {
    const {  categ } = useSelector((state) => state.home);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCateg());
      }, [dispatch]);

 
      const delcateg = (item) => {
        Swal.fire({
          icon: "error",  
          title: `${item.name} will be deleted`,
          showCancelButton: true,
        }).then((e) => {
          if (e.isConfirmed) {
            dispatch(deletecategoryadmin(item));
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
      <span className="pe-3">icon</span>
      <span>overview</span>
    </div>
    <div
      onClick={() => navigate("/shop")}
      className="element-admin ps-5 mb-4"
    >
      <span className="pe-3">icon</span>
      <span>Shop page</span>
    </div>
    <div
      onClick={()=>navigate('/productsadmin')}
      className="element-admin ps-5 mb-4"
    >
      <span className="pe-3">icon</span>
      <span>All Products</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3">icon</span>
      <span>Orders</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3">icon</span>
      <span>All Categorys</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3">icon</span>
      <span>Users</span>
    </div>
    <div className="element-admin ps-5 mb-4">
      <span className="pe-3">icon</span>
      <span>Blogs</span>
    </div>
  </div>
  <div className="content-adminproducts p-3">
  <h1 className="title-admin mb-2 ">Hey There In Furnival</h1>
  <p className="p-01">Our Dashbord To Show every Thing In The Site</p>
  <p className="p-02">
    {" "}
    Home / Admin / <span style={{ color: "#ffb921" }}>
      All Category
    </span>{" "}
  </p>
  <button
    onClick={()=>navigate('/addcategory')}
    className="Add-product-admin mb-3"
  >
    {" "}
    Add New Category{" "}
  </button>
  <table className="table-products">
          <thead>
            <tr>
              <th>id</th>
             
              <th>Image</th>
              
              <th>Edit</th>
              <th>View</th>
              <th>Delete</th>
            </tr>
            {categ.map((product) => (
              <tr key={product.id}>
                <td>#{product.id}</td>
                
                <td>
                  {" "}
                  <img
                    src={product.image}
                    alt="product image"
                    className="product-admin-image"
                  />{" "}
                </td>
               
                <td onClick={''} style={{cursor:'pointer'}}> <span className="edit-icon"> <FaPenToSquare /> </span> </td>
                <td style={{cursor:'pointer'}} onClick={()=>navigate(`/detailscategory/${product.id}`)}> <span className="view-admin">View</span> </td>
                <td onClick={()=>dispatch(delcateg(product))} style={{cursor:'pointer'}}>
                  <span className="del-icon-admin" >
                    <BsFillTrash3Fill />
                  </span>
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <ToastContainer />
  </div>
    </div>
  )
}

export default AllAdminCateg
